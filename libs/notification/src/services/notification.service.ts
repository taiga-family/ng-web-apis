import {Inject, inject, Injectable} from '@angular/core';
import {InjectionTokenType, SERVICE_WORKER} from '@ng-web-apis/common';
import {
    filter,
    from,
    fromEvent,
    map,
    NEVER,
    Observable,
    shareReplay,
    switchMap,
    throwError,
} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {NOTIFICATION_SW_CLICKS} from '../tokens/notification-clicks';
import {NOTIFICATION_SW_CLOSES} from '../tokens/notification-closes';
import {NOTIFICATION_FACTORY} from '../tokens/notification-factory';
import {NOTIFICATION_SUPPORT} from '../tokens/support';

const NOT_SUPPORTED_ERROR$ = throwError(
    () => new Error(`Notification API is not supported in your browser`),
);

const mapToVoid = map(() => undefined);

@Injectable({
    providedIn: `root`,
})
export class NotificationService {
    private readonly swRegistration$ = from(
        inject(SERVICE_WORKER).getRegistration(),
    ).pipe(shareReplay({bufferSize: 1, refCount: true}));

    constructor(
        @Inject(NOTIFICATION_SUPPORT) private readonly support: boolean,
        @Inject(NOTIFICATION_FACTORY)
        private readonly createNotification: InjectionTokenType<
            typeof NOTIFICATION_FACTORY
        >,
        @Inject(NOTIFICATION_SW_CLICKS)
        private readonly notificationSwClicks$: InjectionTokenType<
            typeof NOTIFICATION_SW_CLICKS
        >,
        @Inject(NOTIFICATION_SW_CLOSES)
        private readonly notificationSwCloses$: InjectionTokenType<
            typeof NOTIFICATION_SW_CLOSES
        >,
    ) {}

    requestPermission(): Observable<NotificationPermission> {
        if (!this.support) {
            return NOT_SUPPORTED_ERROR$;
        }

        /**
         * TODO: replace deprecated callback with promise after Safari 15+ support
         * return from(Notification.requestPermission());
         */
        return new Observable(subscriber => {
            void Notification.requestPermission(permission => {
                subscriber.next(permission);
                subscriber.complete();
            })?.catch(err => subscriber.error(err));
        });
    }

    open(title: string, options?: NotificationOptions): Observable<Notification> {
        if (!this.support) {
            return NOT_SUPPORTED_ERROR$;
        }

        return from(this.createNotification(title, options)).pipe(
            switchMap(notification => {
                const close$ = this.fromEvent(notification, `close`);

                return new Observable<Notification>(subscriber => {
                    subscriber.next(notification);

                    return () => notification.close();
                }).pipe(takeUntil(close$));
            }),
        );
    }

    fromEvent<E extends keyof NotificationEventMap>(
        targetNotification: Notification & {timestamp?: number},
        eventName: E,
    ): Observable<{action: string} | void> {
        const isTargetNotification = ({timestamp}: {timestamp?: number}): boolean =>
            timestamp === targetNotification.timestamp;

        return this.swRegistration$.pipe(
            switchMap(swRegistration => {
                if (!swRegistration) {
                    return fromEvent(targetNotification, eventName).pipe(mapToVoid);
                }

                switch (eventName) {
                    case `click`:
                        return this.notificationSwClicks$.pipe(
                            filter(x => isTargetNotification(x.notification)),
                        );
                    case `close`:
                        return this.notificationSwCloses$.pipe(
                            filter(isTargetNotification),
                            mapToVoid,
                        );
                    default:
                        return NEVER;
                }
            }),
        );
    }
}

import {Inject, Injectable} from '@angular/core';
import {defer, fromEvent, Observable, takeUntil, throwError} from 'rxjs';

import {NOTIFICATION_SUPPORT} from '../tokens/support';

const NOT_SUPPORTED_ERROR$ = throwError(
    () => new Error('Notification API is not supported in your browser'),
);

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    constructor(@Inject(NOTIFICATION_SUPPORT) private readonly support: boolean) {}

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

        return defer(() => {
            const notification = new Notification(title, options);
            const close$ = fromEvent(notification, 'close');

            return new Observable<Notification>(subscriber => {
                subscriber.next(notification);

                return () => notification.close();
            }).pipe(takeUntil(close$));
        });
    }
}

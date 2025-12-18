import {inject, Injectable} from '@angular/core';
import {defer, fromEvent, Observable, takeUntil, throwError} from 'rxjs';

import {WA_NOTIFICATION_SUPPORT} from '../tokens/support';

const NOT_SUPPORTED_ERROR$ = throwError(
    () => new Error('Notification API is not supported in your browser'),
);

@Injectable({providedIn: 'root'})
export class WaNotificationService {
    private readonly support = inject(WA_NOTIFICATION_SUPPORT);

    public requestPermission(): Observable<NotificationPermission> {
        if (!this.support) {
            return NOT_SUPPORTED_ERROR$;
        }

        /**
         * TODO: replace deprecated callback with promise after Safari 15+ support
         * return from(Notification.requestPermission());
         */
        return new Observable((subscriber) => {
            // eslint-disable-next-line compat/compat
            void Notification.requestPermission((permission) => {
                subscriber.next(permission);
                subscriber.complete();
            }).catch((err: unknown) => subscriber.error(err));
        });
    }

    public open(title: string, options?: NotificationOptions): Observable<Notification> {
        if (!this.support) {
            return NOT_SUPPORTED_ERROR$;
        }

        return defer(() => {
            // eslint-disable-next-line compat/compat
            const notification = new Notification(title, options);
            const close$ = fromEvent(notification, 'close');

            return new Observable<Notification>((subscriber) => {
                subscriber.next(notification);

                return () => notification.close();
            }).pipe(takeUntil(close$));
        });
    }
}

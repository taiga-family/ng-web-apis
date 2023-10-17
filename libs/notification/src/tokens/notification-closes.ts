import {InjectionToken} from '@angular/core';
import {NEVER, Observable} from 'rxjs';

export const NOTIFICATION_SW_CLOSES = new InjectionToken<
    Observable<Notification & {timestamp?: number}>
>(
    `[NOTIFICATION_SW_CLOSES]: Global listener for events when ANY system notification spawned by Notification API (and only inside Service Worker!) has been closed`,
    {
        factory: () => NEVER,
    },
);

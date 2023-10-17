import {InjectionToken} from '@angular/core';
import type {SwPush} from '@angular/service-worker';
import {NEVER} from 'rxjs';

export const NOTIFICATION_SW_CLICKS = new InjectionToken<SwPush['notificationClicks']>(
    `[NOTIFICATION_SW_CLICKS]: Global listener for events when ANY system notification spawned by Notification API (and only inside Service Worker!) has been clicked`,
    {
        factory: () => NEVER,
    },
);

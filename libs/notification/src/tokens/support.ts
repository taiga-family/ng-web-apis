import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const NOTIFICATION_SUPPORT = new InjectionToken<boolean>(
    'Is Notification API supported?',
    {
        factory: () => 'Notification' in inject(WINDOW),
    },
);

import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

export const WA_NOTIFICATION_SUPPORT = new InjectionToken<boolean>(
    '[WA_NOTIFICATION_SUPPORT]',
    {factory: () => 'Notification' in inject(WA_WINDOW)},
);

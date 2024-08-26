import { WA_WINDOW } from "@ng-web-apis/common";
import {inject, InjectionToken} from '@angular/core';
export const WA_NOTIFICATION_SUPPORT = new InjectionToken<boolean>(
    '[WA_NOTIFICATION_SUPPORT]',
    {
        factory: () => 'Notification' in inject(WA_WINDOW),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_NOTIFICATION_SUPPORT}
 */
export const NOTIFICATION_SUPPORT = WA_NOTIFICATION_SUPPORT;

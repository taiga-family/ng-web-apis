import { WA_WINDOW } from "@ng-web-apis/common";
import {inject, InjectionToken} from '@angular/core';
export const WA_RESIZE_OBSERVER_SUPPORT = new InjectionToken<boolean>(
    '[WA_RESIZE_OBSERVER_SUPPORT]',
    {
        providedIn: 'root',
        factory: () => !!(inject(WA_WINDOW) as any).ResizeObserver,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_RESIZE_OBSERVER_SUPPORT}
 */
export const RESIZE_OBSERVER_SUPPORT = WA_RESIZE_OBSERVER_SUPPORT;

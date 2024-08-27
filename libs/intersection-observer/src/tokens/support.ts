import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

export const WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken<boolean>(
    '[WA_INTERSECTION_OBSERVER_SUPPORT]: [INTERSECTION_OBSERVER_SUPPORT]',
    {
        providedIn: 'root',
        factory: () => !!(inject(WA_WINDOW) as any).IntersectionObserver,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_INTERSECTION_OBSERVER_SUPPORT}
 */
export const INTERSECTION_OBSERVER_SUPPORT = WA_INTERSECTION_OBSERVER_SUPPORT;

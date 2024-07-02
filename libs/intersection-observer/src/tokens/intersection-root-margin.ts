import {InjectionToken} from '@angular/core';

export const WA_INTERSECTION_ROOT_MARGIN_DEFAULT = '0px 0px 0px 0px';

/**
 * @deprecated: drop in v5.0, use {@link WA_INTERSECTION_ROOT_MARGIN_DEFAULT}
 */
export const INTERSECTION_ROOT_MARGIN_DEFAULT = WA_INTERSECTION_ROOT_MARGIN_DEFAULT;

export const WA_INTERSECTION_ROOT_MARGIN = new InjectionToken<string>(
    '[WA_INTERSECTION_ROOT_MARGIN]: rootMargin for IntersectionObserver',
    {
        providedIn: 'root',
        factory: () => INTERSECTION_ROOT_MARGIN_DEFAULT,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_INTERSECTION_ROOT_MARGIN}
 */
export const INTERSECTION_ROOT_MARGIN = WA_INTERSECTION_ROOT_MARGIN;

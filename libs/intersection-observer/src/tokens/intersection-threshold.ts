import {InjectionToken} from '@angular/core';

export const WA_INTERSECTION_THRESHOLD_DEFAULT = 0;

/**
 * @deprecated: drop in v5.0, use {@link WA_INTERSECTION_THRESHOLD_DEFAULT}
 */
export const INTERSECTION_THRESHOLD_DEFAULT = WA_INTERSECTION_THRESHOLD_DEFAULT;

export const WA_INTERSECTION_THRESHOLD = new InjectionToken<number[] | number>(
    '[WA_INTERSECTION_THRESHOLD]',
    {
        providedIn: 'root',
        factory: () => INTERSECTION_THRESHOLD_DEFAULT,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_INTERSECTION_THRESHOLD}
 */
export const INTERSECTION_THRESHOLD = WA_INTERSECTION_THRESHOLD;

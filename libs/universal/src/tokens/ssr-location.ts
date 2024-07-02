import {InjectionToken} from '@angular/core';

export const WA_SSR_LOCATION = new InjectionToken<Location>(
    '[WA_SSR_LOCATION]: Location object passed from server side',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_SSR_LOCATION}
 */
export const SSR_LOCATION = WA_SSR_LOCATION;

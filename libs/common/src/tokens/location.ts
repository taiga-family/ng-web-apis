import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_LOCATION = new InjectionToken<Location>('[WA_LOCATION]', {
    factory: () => inject(WINDOW).location,
    providedIn: 'platform',
});

/**
 * @deprecated: drop in v5.0, use {@link WA_LOCATION}
 */
export const LOCATION = WA_LOCATION;

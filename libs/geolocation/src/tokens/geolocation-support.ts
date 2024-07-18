import {inject, InjectionToken} from '@angular/core';

import {GEOLOCATION} from './geolocation';

export const WA_GEOLOCATION_SUPPORT = new InjectionToken<boolean>(
    '[WA_GEOLOCATION_SUPPORT]',
    {
        factory: () => !!inject(GEOLOCATION),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_GEOLOCATION_SUPPORT}
 */
export const GEOLOCATION_SUPPORT = WA_GEOLOCATION_SUPPORT;

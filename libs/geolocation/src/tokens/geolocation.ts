import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';

export const WA_GEOLOCATION = new InjectionToken<Geolocation>('[WA_GEOLOCATION]', {
    factory: () => inject(NAVIGATOR).geolocation,
});

/**
 * @deprecated: drop in v5.0, use {@link WA_GEOLOCATION}
 */
export const GEOLOCATION = WA_GEOLOCATION;

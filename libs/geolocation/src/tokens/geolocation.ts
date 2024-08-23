import { WA_NAVIGATOR } from "@ng-web-apis/common";
import {inject, InjectionToken} from '@angular/core';
export const WA_GEOLOCATION = new InjectionToken<Geolocation>('[WA_GEOLOCATION]', {
    factory: () => inject(WA_NAVIGATOR).geolocation,
});

/**
 * @deprecated: drop in v5.0, use {@link WA_GEOLOCATION}
 */
export const GEOLOCATION = WA_GEOLOCATION;

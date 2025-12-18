import {inject, InjectionToken} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';

export const WA_GEOLOCATION = new InjectionToken<Geolocation>('[WA_GEOLOCATION]', {
    factory: () => inject(WA_NAVIGATOR).geolocation,
});

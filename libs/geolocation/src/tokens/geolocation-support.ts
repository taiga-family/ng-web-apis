import {inject, InjectionToken} from '@angular/core';

import {WA_GEOLOCATION} from './geolocation';

export const WA_GEOLOCATION_SUPPORT = new InjectionToken<boolean>(
    ngDevMode ? '[WA_GEOLOCATION_SUPPORT]' : '',
    {factory: () => !!inject(WA_GEOLOCATION)},
);

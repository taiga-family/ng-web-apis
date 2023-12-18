import {inject, InjectionToken} from '@angular/core';

import {GEOLOCATION} from './geolocation';

export const GEOLOCATION_SUPPORT = new InjectionToken<boolean>(
    '[GEOLOCATION_SUPPORT]: Is Geolocation API supported?',
    {
        factory: () => !!inject(GEOLOCATION),
    },
);

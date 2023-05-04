import {inject, InjectionToken} from '@angular/core';
import {GEOLOCATION} from './geolocation';

export const GEOLOCATION_SUPPORT = new InjectionToken<boolean>(
    'Is Geolocation API supported?',
    {
        factory: () => {
            return !!inject(GEOLOCATION);
        },
    },
);

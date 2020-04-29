import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from './window';

export const LOCATION = new InjectionToken<Location>(
    'An abstraction over window.location object',
    {
        factory: () => inject(WINDOW).location,
    },
);

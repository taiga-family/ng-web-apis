import {InjectionToken} from '@angular/core';

export const SSR_LOCATION = new InjectionToken<Location>(
    'Location object passed from server side',
);

import {InjectionToken} from '@angular/core';

export const SSR_LOCATION = new InjectionToken<Location>(
    '[SSR_LOCATION]: Location object passed from server side',
);

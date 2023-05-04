import {InjectionToken} from '@angular/core';

export const SSR_USER_AGENT = new InjectionToken<string>(
    'User Agent string passed from server side',
);

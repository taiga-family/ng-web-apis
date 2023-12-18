import {InjectionToken} from '@angular/core';

export const SSR_USER_AGENT = new InjectionToken<string>(
    '[SSR_USER_AGENT]: User Agent string passed from server side',
);

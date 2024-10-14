import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_SESSION_STORAGE = new InjectionToken<Storage>('[WA_SESSION_STORAGE]', {
    factory: () => inject(WINDOW).sessionStorage,
});

/**
 * @deprecated: drop in v5.0, use {@link WA_SESSION_STORAGE}
 */
export const SESSION_STORAGE = WA_SESSION_STORAGE;

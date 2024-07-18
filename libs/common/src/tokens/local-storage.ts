import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_LOCAL_STORAGE = new InjectionToken<Storage>('[WA_LOCAL_STORAGE]', {
    factory: () => inject(WINDOW).localStorage,
});

/**
 * @deprecated: drop in v5.0, use {@link WA_LOCAL_STORAGE}
 */
export const LOCAL_STORAGE = WA_LOCAL_STORAGE;

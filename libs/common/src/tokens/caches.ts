import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const CACHES = new InjectionToken<CacheStorage>(
    `[CACHES]: An abstraction over window.caches object`,
    {
        factory: () => inject(WINDOW).caches,
    },
);

import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_CACHES = new InjectionToken<CacheStorage>('[WA_CACHES]', {
    factory: () => inject(WA_WINDOW).caches,
});

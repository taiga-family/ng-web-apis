import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_CACHES = new InjectionToken<CacheStorage>('[WA_CACHES]', {
    factory: () => inject(WINDOW).caches,
    providedIn: 'platform',
});

/**
 * @deprecated: drop in v5.0, use {@link WA_CACHES}
 */
export const CACHES = WA_CACHES;

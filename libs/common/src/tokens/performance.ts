import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_PERFORMANCE = new InjectionToken<Performance>('[WA_PERFORMANCE]', {
    factory: () => inject(WINDOW).performance,
    providedIn: 'platform',
});

/**
 * @deprecated: drop in v5.0, use {@link WA_PERFORMANCE}
 */
export const PERFORMANCE = WA_PERFORMANCE;

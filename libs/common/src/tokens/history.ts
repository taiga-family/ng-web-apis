import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_HISTORY = new InjectionToken<History>('[WA_HISTORY]', {
    factory: () => inject(WINDOW).history,
    providedIn: 'platform',
});

/**
 * @deprecated: drop in v5.0, use {@link WA_HISTORY}
 */
export const HISTORY = WA_HISTORY;

import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_HISTORY = new InjectionToken<History>(
    '[WA_HISTORY]: An abstraction over window.history object',
    {
        factory: () => inject(WINDOW).history,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_HISTORY}
 */
export const HISTORY = WA_HISTORY;

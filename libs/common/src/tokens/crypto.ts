import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_CRYPTO = new InjectionToken<Crypto>(
    '[WA_CRYPTO]: An abstraction over window.crypto object',
    {
        factory: () => inject(WINDOW).crypto,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_CRYPTO}
 */
export const CRYPTO = WA_CRYPTO;

import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const CRYPTO = new InjectionToken<Crypto>(
    'An abstraction over window.crypto object',
    {
        factory: () => inject(WINDOW).crypto,
    },
);

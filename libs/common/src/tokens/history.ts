import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const HISTORY = new InjectionToken<History>(
    '[HISTORY]: An abstraction over window.history object',
    {
        factory: () => inject(WINDOW).history,
    },
);

import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const SESSION_STORAGE = new InjectionToken<Storage>(
    '[SESSION_STORAGE]: An abstraction over window.sessionStorage object',
    {
        factory: () => inject(WINDOW).sessionStorage,
    },
);

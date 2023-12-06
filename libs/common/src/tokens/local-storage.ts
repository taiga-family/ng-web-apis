import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const LOCAL_STORAGE = new InjectionToken<Storage>(
    `[LOCAL_STORAGE]: An abstraction over window.localStorage object`,
    {
        factory: () => inject(WINDOW).localStorage,
    },
);

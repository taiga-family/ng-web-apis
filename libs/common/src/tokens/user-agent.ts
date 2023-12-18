import {inject, InjectionToken} from '@angular/core';

import {NAVIGATOR} from './navigator';

export const USER_AGENT = new InjectionToken<string>(
    '[USER_AGENT]: An abstraction over window.navigator.userAgent object',
    {
        factory: () => inject(NAVIGATOR).userAgent,
    },
);

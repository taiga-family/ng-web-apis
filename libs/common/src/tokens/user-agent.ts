import {inject, InjectionToken} from '@angular/core';

import {NAVIGATOR} from './navigator';

export const WA_USER_AGENT = new InjectionToken<string>(
    '[WA_USER_AGENT]: An abstraction over window.navigator.userAgent object',
    {
        factory: () => inject(NAVIGATOR).userAgent,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_USER_AGENT}
 */
export const USER_AGENT = WA_USER_AGENT;

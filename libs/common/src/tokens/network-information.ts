import {inject, InjectionToken} from '@angular/core';

import {NAVIGATOR} from './navigator';

export const NETWORK_INFORMATION = new InjectionToken<
    // @ts-ignore
    (typeof navigator)['connection'] | null
>('[NETWORK_INFORMATION]: An abstraction over window.navigator.connection object', {
    // @ts-ignore
    factory: () => inject(NAVIGATOR).connection || null,
});

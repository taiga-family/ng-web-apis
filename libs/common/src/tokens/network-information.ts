import {inject, InjectionToken} from '@angular/core';

import {WA_NAVIGATOR} from './navigator';

export const WA_NETWORK_INFORMATION = new InjectionToken<
    // @ts-ignore
    (typeof navigator)['connection'] | null
>('[WA_NETWORK_INFORMATION]', {
    // @ts-ignore
    factory: () => inject(WA_NAVIGATOR).connection || null,
    providedIn: 'platform',
});

/**
 * @deprecated: drop in v5.0, use {@link WA_NETWORK_INFORMATION}
 */
export const NETWORK_INFORMATION = WA_NETWORK_INFORMATION;

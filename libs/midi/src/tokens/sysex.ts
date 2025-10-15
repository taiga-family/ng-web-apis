import {InjectionToken} from '@angular/core';

export const WA_SYSEX = new InjectionToken<boolean>('[WA_SYSEX]', {
    providedIn: 'root',

    factory: () => false,
});

/**
 * @deprecated: drop in v5.0, use {@link WA_SYSEX}
 */
export const SYSEX = WA_SYSEX;

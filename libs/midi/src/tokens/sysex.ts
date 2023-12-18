import {InjectionToken} from '@angular/core';

export const SYSEX = new InjectionToken<boolean>('[SYSEX]: Require sysex MIDI access', {
    providedIn: 'root',
    // eslint-disable-next-line no-restricted-syntax
    factory: () => false,
});

import {InjectionToken} from '@angular/core';

export const SYSEX = new InjectionToken<boolean>('Require sysex MIDI access', {
    providedIn: 'root',
    factory: () => false,
});

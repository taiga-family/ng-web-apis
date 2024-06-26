import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';

import {SYSEX} from './sysex';

export const MIDI_ACCESS = new InjectionToken<Promise<globalThis.MIDIAccess>>(
    '[MIDI_ACCESS]: Promise for MIDIAccess object',
    {
        providedIn: 'root',
        factory: async () => {
            const navigatorRef = inject(NAVIGATOR);
            const sysex = inject(SYSEX);

            return navigatorRef.requestMIDIAccess
                ? navigatorRef.requestMIDIAccess({sysex})
                : Promise.reject(new Error('Web MIDI API is not supported'));
        },
    },
);

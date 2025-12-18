import {inject, InjectionToken} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';

import {WA_SYSEX} from './sysex';

export const WA_MIDI_ACCESS = new InjectionToken<Promise<globalThis.MIDIAccess>>(
    '[WA_MIDI_ACCESS]',
    {
        providedIn: 'root',
        factory: async () => {
            const navigatorRef = inject<Navigator | Partial<Navigator>>(WA_NAVIGATOR);
            const sysex = inject(WA_SYSEX);

            return navigatorRef.requestMIDIAccess
                ? navigatorRef.requestMIDIAccess({sysex})
                : Promise.reject(new Error('Web MIDI API is not supported'));
        },
    },
);

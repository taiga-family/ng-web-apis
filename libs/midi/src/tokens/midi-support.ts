import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';

export const MIDI_SUPPORT = new InjectionToken<boolean>(
    `[MIDI_SUPPORT]: Web MIDI API support`,
    {
        factory: () => !!inject(NAVIGATOR).requestMIDIAccess,
    },
);

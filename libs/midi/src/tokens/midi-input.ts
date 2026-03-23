import {InjectionToken} from '@angular/core';

export const WA_MIDI_INPUT = new InjectionToken<Promise<MIDIInput | undefined>>(
    ngDevMode ? '[WA_MIDI_INPUT]' : '',
);

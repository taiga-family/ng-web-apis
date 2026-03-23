import {InjectionToken} from '@angular/core';

export const WA_MIDI_INPUT_QUERY = new InjectionToken<string>(
    ngDevMode ? '[WA_MIDI_INPUT_QUERY]' : '',
);

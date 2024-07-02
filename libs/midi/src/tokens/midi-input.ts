import {InjectionToken} from '@angular/core';

import MIDIInput = WebMidi.MIDIInput;

export const WA_MIDI_INPUT = new InjectionToken<Promise<MIDIInput | undefined>>(
    '[WA_MIDI_INPUT]: MIDIInput object',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_INPUT}
 */
export const MIDI_INPUT = WA_MIDI_INPUT;

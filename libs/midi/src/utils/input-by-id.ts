import {Provider} from '@angular/core';

import {MIDI_ACCESS} from '../tokens/midi-access';
import {MIDI_INPUT} from '../tokens/midi-input';
import {MIDI_INPUT_QUERY} from '../tokens/midi-input-query';

import MIDIAccess = WebMidi.MIDIAccess;

import MIDIInput = WebMidi.MIDIInput;

/**
 * Provide MIDIInput by id
 *
 * @param id
 */
export function inputById(id: string): Provider[] {
    return [
        {
            provide: MIDI_INPUT_QUERY,
            useValue: id,
        },
        {
            provide: MIDI_INPUT,
            deps: [MIDI_ACCESS, MIDI_INPUT_QUERY],
            useFactory: async (
                midiAccess: Promise<MIDIAccess>,
                id: string,
            ): Promise<MIDIInput | undefined> =>
                midiAccess.then(access => access.inputs.get(id)),
        },
    ];
}

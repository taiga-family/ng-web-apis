import {Provider} from '@angular/core';
import {MIDI_ACCESS} from '../tokens/midi-access';
import {MIDI_INPUT} from '../tokens/midi-input';
import {MIDI_INPUT_QUERY} from '../tokens/midi-input-query';

import MIDIInput = WebMidi.MIDIInput;
import MIDIAccess = WebMidi.MIDIAccess;

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
            useFactory: inputByIdFactory,
        },
    ];
}

export function inputByIdFactory(
    midiAccess: Promise<MIDIAccess>,
    id: string,
): Promise<MIDIInput | undefined> {
    return midiAccess.then(access => access.inputs.get(id));
}

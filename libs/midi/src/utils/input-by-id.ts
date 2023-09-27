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
            useFactory: inputByIdFactory,
        },
    ];
}

/**
 * @deprecated View Engine legacy
 * TODO: use arrow function for `useFactory` and delete this exported function in future major release
 */
export function inputByIdFactory(
    midiAccess: Promise<MIDIAccess>,
    id: string,
): Promise<MIDIInput | undefined> {
    return midiAccess.then(access => access.inputs.get(id));
}

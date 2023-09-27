import {Provider} from '@angular/core';
import {MIDI_ACCESS} from '../tokens/midi-access';
import {MIDI_INPUT} from '../tokens/midi-input';
import {MIDI_INPUT_QUERY} from '../tokens/midi-input-query';

import MIDIAccess = WebMidi.MIDIAccess;

import MIDIInput = WebMidi.MIDIInput;

/**
 * Provide MIDIInput by name
 *
 * @param name
 */
export function inputByName(name: string): Provider[] {
    return [
        {
            provide: MIDI_INPUT_QUERY,
            useValue: name,
        },
        {
            provide: MIDI_INPUT,
            deps: [MIDI_ACCESS, MIDI_INPUT_QUERY],
            useFactory: inputByNameFactory,
        },
    ];
}

/**
 * @deprecated View Engine legacy
 * TODO: use arrow function for `useFactory` and delete this exported function in future major release
 */
export function inputByNameFactory(
    midiAccess: Promise<MIDIAccess>,
    name: string,
): Promise<MIDIInput | undefined> {
    return midiAccess.then(access =>
        [...access.inputs.values()].find(input => input.name === name),
    );
}

import {Provider} from '@angular/core';
import {MIDI_ACCESS} from '../tokens/midi-access';
import {MIDI_OUTPUT} from '../tokens/midi-output';
import {MIDI_OUTPUT_QUERY} from '../tokens/midi-output-query';

import MIDIAccess = WebMidi.MIDIAccess;

import MIDIOutput = WebMidi.MIDIOutput;

/**
 * Provide MIDIOutput by name
 *
 * @param name
 */
export function outputByName(name: string): Provider[] {
    return [
        {
            provide: MIDI_OUTPUT_QUERY,
            useValue: name,
        },
        {
            provide: MIDI_OUTPUT,
            deps: [MIDI_ACCESS, MIDI_OUTPUT_QUERY],
            useFactory: outputByNameFactory,
        },
    ];
}

/**
 * @deprecated View Engine legacy
 * TODO: use arrow function for `useFactory` and delete this exported function in future major release
 */
export function outputByNameFactory(
    midiAccess: Promise<MIDIAccess>,
    name: string,
): Promise<MIDIOutput | undefined> {
    return midiAccess.then(access =>
        [...access.outputs.values()].find(output => output.name === name),
    );
}

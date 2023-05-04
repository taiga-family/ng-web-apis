import {Provider} from '@angular/core';
import {MIDI_ACCESS} from '../tokens/midi-access';
import {MIDI_OUTPUT} from '../tokens/midi-output';
import {MIDI_OUTPUT_QUERY} from '../tokens/midi-output-query';

import MIDIOutput = WebMidi.MIDIOutput;
import MIDIAccess = WebMidi.MIDIAccess;

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

export function outputByNameFactory(
    midiAccess: Promise<MIDIAccess>,
    name: string,
): Promise<MIDIOutput | undefined> {
    return midiAccess.then(access =>
        [...access.outputs.values()].find(output => output.name === name),
    );
}

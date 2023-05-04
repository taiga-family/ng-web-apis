import {Provider} from '@angular/core';
import {MIDI_ACCESS} from '../tokens/midi-access';
import {MIDI_OUTPUT} from '../tokens/midi-output';
import {MIDI_OUTPUT_QUERY} from '../tokens/midi-output-query';

import MIDIOutput = WebMidi.MIDIOutput;
import MIDIAccess = WebMidi.MIDIAccess;

/**
 * Provide MIDIOutput by id
 *
 * @param id
 */
export function outputById(id: string): Provider[] {
    return [
        {
            provide: MIDI_OUTPUT_QUERY,
            useValue: id,
        },
        {
            provide: MIDI_OUTPUT,
            deps: [MIDI_ACCESS, MIDI_OUTPUT_QUERY],
            useFactory: outputByIdFactory,
        },
    ];
}

export function outputByIdFactory(
    midiAccess: Promise<MIDIAccess>,
    id: string,
): Promise<MIDIOutput | undefined> {
    return midiAccess.then(access => access.outputs.get(id));
}

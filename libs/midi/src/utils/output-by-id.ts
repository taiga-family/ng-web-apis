import {type Provider} from '@angular/core';

import {WA_MIDI_ACCESS} from '../tokens/midi-access';
import {WA_MIDI_OUTPUT} from '../tokens/midi-output';
import {WA_MIDI_OUTPUT_QUERY} from '../tokens/midi-output-query';

/**
 * Provide MIDIOutput by id
 *
 * @param id
 */
export function outputById(id: string): Provider[] {
    return [
        {
            provide: WA_MIDI_OUTPUT_QUERY,
            useValue: id,
        },
        {
            provide: WA_MIDI_OUTPUT,
            deps: [WA_MIDI_ACCESS, WA_MIDI_OUTPUT_QUERY],
            useFactory: async (
                midiAccess: Promise<MIDIAccess>,
                id: string,
            ): Promise<MIDIOutput | undefined> =>
                midiAccess.then((access: MIDIAccess): MIDIOutput | undefined => {
                    let result: MIDIOutput | undefined;

                    access.outputs.forEach((output) => {
                        if (output.id === id) {
                            result = output;
                        }
                    });

                    return result;
                }),
        },
    ];
}

import {type Provider} from '@angular/core';

import {WA_MIDI_ACCESS} from '../tokens/midi-access';
import {WA_MIDI_OUTPUT} from '../tokens/midi-output';
import {WA_MIDI_OUTPUT_QUERY} from '../tokens/midi-output-query';

/**
 * Provide MIDIOutput by name
 *
 * @param name
 */
export function outputByName(name: string): Provider[] {
    return [
        {provide: WA_MIDI_OUTPUT_QUERY, useValue: name},
        {
            provide: WA_MIDI_OUTPUT,
            deps: [WA_MIDI_ACCESS, WA_MIDI_OUTPUT_QUERY],
            useFactory: async (
                midiAccess: Promise<MIDIAccess>,
                name: string,
            ): Promise<MIDIOutput | undefined> =>
                midiAccess.then((access: MIDIAccess): MIDIOutput | undefined => {
                    let result: MIDIOutput | undefined;

                    access.outputs.forEach((output) => {
                        if (output.name === name) {
                            result = output;
                        }
                    });

                    return result;
                }),
        },
    ];
}

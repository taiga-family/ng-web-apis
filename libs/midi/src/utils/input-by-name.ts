import type {Provider} from '@angular/core';

import {WA_MIDI_ACCESS} from '../tokens/midi-access';
import {WA_MIDI_INPUT} from '../tokens/midi-input';
import {WA_MIDI_INPUT_QUERY} from '../tokens/midi-input-query';

/**
 * Provide MIDIInput by name
 *
 * @param name
 */
export function inputByName(name: string): Provider[] {
    return [
        {
            provide: WA_MIDI_INPUT_QUERY,
            useValue: name,
        },
        {
            provide: WA_MIDI_INPUT,
            deps: [WA_MIDI_ACCESS, WA_MIDI_INPUT_QUERY],
            useFactory: async (
                midiAccess: Promise<MIDIAccess>,
                name: string,
            ): Promise<MIDIInput | undefined> =>
                midiAccess.then((access: MIDIAccess) => {
                    let result: MIDIInput | undefined;

                    access.inputs.forEach((input) => {
                        if (input.name === name) {
                            result = input;
                        }
                    });

                    return result;
                }),
        },
    ];
}

import {type Provider} from '@angular/core';

import {WA_MIDI_ACCESS} from '../tokens/midi-access';
import {WA_MIDI_INPUT} from '../tokens/midi-input';
import {WA_MIDI_INPUT_QUERY} from '../tokens/midi-input-query';

/**
 * Provide MIDIInput by id
 *
 * @param id
 */
export function inputById(id: string): Provider[] {
    return [
        {provide: WA_MIDI_INPUT_QUERY, useValue: id},
        {
            provide: WA_MIDI_INPUT,
            deps: [WA_MIDI_ACCESS, WA_MIDI_INPUT_QUERY],
            useFactory: async (
                midiAccess: Promise<MIDIAccess>,
                id: string,
            ): Promise<MIDIInput | undefined> =>
                midiAccess.then((access) => {
                    let result: MIDIInput | undefined;

                    access.inputs.forEach((input) => {
                        if (input.id === id) {
                            result = input;
                        }
                    });

                    return result;
                }),
        },
    ];
}

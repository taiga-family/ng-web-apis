import {filter, map, type MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

/**
 * Filter MIDI messages to notes only
 *
 * IMPORTANT: It normalizes noteOff events to noteOn with 0 velocity
 */
export function notes(): MonoTypeOperatorFunction<WebMidi.MIDIMessageEvent> {
    return (source) =>
        source.pipe(
            filter(({data}) => between(data[0] ?? 0, 128, 159)),
            map((event) => {
                if (between(event.data[0] ?? 0, 128, 143)) {
                    if (event.data[0]) {
                        event.data[0] += 16;
                    }

                    if (event.data[2]) {
                        event.data[2] = 0;
                    }
                }

                return event;
            }),
        );
}

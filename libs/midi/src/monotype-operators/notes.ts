import {MonoTypeOperatorFunction} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {between} from '../utils/between';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Filter MIDI messages to notes only
 *
 * IMPORTANT: It normalizes noteOff events to noteOn with 0 velocity
 */
export function notes(): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return source =>
        source.pipe(
            filter(({data}) => between(data[0], 128, 159)),
            map(event => {
                if (between(event.data[0], 128, 143)) {
                    event.data[0] += 16;
                    event.data[2] = 0;
                }

                return event;
            }),
        );
}

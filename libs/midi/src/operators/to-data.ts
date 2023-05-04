import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Extract MIDI data from event
 */
export function toData(): OperatorFunction<MIDIMessageEvent, Uint8Array> {
    return source => source.pipe(map(({data}) => data));
}

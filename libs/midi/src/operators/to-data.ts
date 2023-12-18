import {map, OperatorFunction} from 'rxjs';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Extract MIDI data from event
 */
export function toData(): OperatorFunction<MIDIMessageEvent, Uint8Array> {
    return source => source.pipe(map(({data}) => data));
}

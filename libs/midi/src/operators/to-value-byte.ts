import {map, OperatorFunction} from 'rxjs';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Extract value byte (3rd) from MIDI message
 *
 * NOTE: Some status messages do not have 3rd byte, use it when you're certain
 */
export function toValueByte(): OperatorFunction<MIDIMessageEvent, number> {
    return source => source.pipe(map(({data}) => data[2]));
}

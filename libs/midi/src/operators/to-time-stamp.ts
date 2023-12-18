import {map, OperatorFunction} from 'rxjs';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Extract received time from MIDI event
 */
export function toTimeStamp(): OperatorFunction<MIDIMessageEvent, number> {
    return source => source.pipe(map(({timeStamp}) => timeStamp));
}

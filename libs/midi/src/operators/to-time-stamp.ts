import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Extract received time from MIDI event
 */
export function toTimeStamp(): OperatorFunction<MIDIMessageEvent, number> {
    return source => source.pipe(map(({timeStamp}) => timeStamp));
}

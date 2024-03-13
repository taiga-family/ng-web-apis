import type {OperatorFunction} from 'rxjs';
import {map} from 'rxjs';

/**
 * Extract received time from MIDI event
 */
export function toTimeStamp(): OperatorFunction<WebMidi.MIDIMessageEvent, number> {
    return source => source.pipe(map(({timeStamp}) => timeStamp));
}

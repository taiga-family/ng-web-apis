import {map, type OperatorFunction} from 'rxjs';

/**
 * Extract received time from MIDI event
 */
export function toTimeStamp(): OperatorFunction<WebMidi.MIDIMessageEvent, number> {
    return (source) => source.pipe(map(({timeStamp}) => timeStamp));
}

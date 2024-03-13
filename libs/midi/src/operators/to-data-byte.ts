import type {OperatorFunction} from 'rxjs';
import {map} from 'rxjs';

/**
 * Extract data byte (2nd) from MIDI message
 *
 * NOTE: Some status messages do not have 2nd byte, use it when you're certain
 */
export function toDataByte(): OperatorFunction<WebMidi.MIDIMessageEvent, number> {
    return source => source.pipe(map(({data}) => data[1]));
}

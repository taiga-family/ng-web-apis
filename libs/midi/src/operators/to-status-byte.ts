import type {OperatorFunction} from 'rxjs';
import {map} from 'rxjs';

/**
 * Extract status byte (1st) from MIDI message
 */
export function toStatusByte(): OperatorFunction<MIDIMessageEvent, number> {
    return (source) => source.pipe(map(({data}) => data[0] ?? 0));
}

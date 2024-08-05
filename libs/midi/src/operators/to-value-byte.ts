import type {OperatorFunction} from 'rxjs';
import {map} from 'rxjs';

/**
 * Extract value byte (3rd) from MIDI message
 *
 * NOTE: Some status messages do not have 3rd byte, use it when you're certain
 */
export function toValueByte(): OperatorFunction<WebMidi.MIDIMessageEvent, number> {
    return (source) => source.pipe(map(({data}) => data[2] || 0));
}

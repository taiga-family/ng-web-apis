import type {OperatorFunction} from 'rxjs';
import {map} from 'rxjs';

/**
 * Extract MIDI data from event
 */
export function toData(): OperatorFunction<WebMidi.MIDIMessageEvent, Uint8Array> {
    return source => source.pipe(map(({data}) => data));
}

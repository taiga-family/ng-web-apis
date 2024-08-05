import type {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs';

/**
 * Filter MIDI messages by MIDIInput name
 *
 * @param name
 */
export function filterByName(name: string): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return (source) =>
        source.pipe(filter(({target}) => (target as MIDIPort).name === name));
}

import {filter, type MonoTypeOperatorFunction} from 'rxjs';

/**
 * Filter MIDI messages by MIDIInput id
 *
 * @param id
 */
export function filterById(id: string): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return (source) => source.pipe(filter(({target}) => (target as MIDIPort).id === id));
}

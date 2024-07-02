import type {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;
import MIDIPort = WebMidi.MIDIPort;

/**
 * Filter MIDI messages by MIDIInput id
 *
 * @param id
 */
export function filterById(id: string): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return (source) => source.pipe(filter(({target}) => (target as MIDIPort).id === id));
}

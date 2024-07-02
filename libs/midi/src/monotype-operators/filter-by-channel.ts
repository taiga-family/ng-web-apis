import type {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs';

import type {MidiChannel} from '../types/midi-channel';

/**
 * Filter MIDI messages by channel
 *
 * @param channel number from 0 to 15
 */
export function filterByChannel(
    channel: MidiChannel,
): MonoTypeOperatorFunction<WebMidi.MIDIMessageEvent> {
    return (source) => source.pipe(filter(({data}) => data[0] % 16 === channel));
}

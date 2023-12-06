import {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs/operators';

import {MidiChannel} from '../types/midi-channel';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Filter MIDI messages by channel
 *
 * @param channel number from 0 to 15
 */
export function filterByChannel(
    channel: MidiChannel,
): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return source => source.pipe(filter(({data}) => data[0] % 16 === channel));
}

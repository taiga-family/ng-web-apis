import {filter, MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Filter MIDI messages to aftertouch changes only
 */
export function aftertouch(): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return source => source.pipe(filter(({data}) => between(data[0], 208, 223)));
}

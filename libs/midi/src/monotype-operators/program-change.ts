import {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs/operators';

import {between} from '../utils/between';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Filter MIDI messages to program changes only
 */
export function programChange(): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return source => source.pipe(filter(({data}) => between(data[0], 208, 223)));
}

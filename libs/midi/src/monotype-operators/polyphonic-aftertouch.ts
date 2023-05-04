import {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs/operators';
import {between} from '../utils/between';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Filter MIDI messages to polyphonic aftertouch changes only
 */
export function polyphonicAftertouch(): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return source => source.pipe(filter(({data}) => between(data[0], 160, 175)));
}

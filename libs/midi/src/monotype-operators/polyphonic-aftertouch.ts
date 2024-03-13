import type {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs';

import {between} from '../utils/between';

/**
 * Filter MIDI messages to polyphonic aftertouch changes only
 */
export function polyphonicAftertouch(): MonoTypeOperatorFunction<WebMidi.MIDIMessageEvent> {
    return source => source.pipe(filter(({data}) => between(data[0], 160, 175)));
}

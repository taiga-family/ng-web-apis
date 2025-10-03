import {filter, type MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

/**
 * Filter MIDI messages to polyphonic aftertouch changes only
 */
export function polyphonicAftertouch(): MonoTypeOperatorFunction<WebMidi.MIDIMessageEvent> {
    return (source) => source.pipe(filter(({data}) => between(data[0] ?? 0, 160, 175)));
}

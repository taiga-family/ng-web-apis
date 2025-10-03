import {filter, type MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

/**
 * Filter MIDI messages to program changes only
 */
export function programChange(): MonoTypeOperatorFunction<WebMidi.MIDIMessageEvent> {
    return (source) => source.pipe(filter(({data}) => between(data[0] ?? 0, 208, 223)));
}

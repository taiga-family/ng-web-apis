import {filter, type MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

/**
 * Filter MIDI messages to pitch bend changes only
 */
export function pitchBend(): MonoTypeOperatorFunction<WebMidi.MIDIMessageEvent> {
    return (source) => source.pipe(filter(({data}) => between(data[0] ?? 0, 224, 239)));
}

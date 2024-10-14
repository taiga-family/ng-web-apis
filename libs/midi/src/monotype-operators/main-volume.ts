import type {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs';

import {between} from '../utils/between';

/**
 * Filter MIDI messages to main volume changes only
 */
export function mainVolume(): MonoTypeOperatorFunction<WebMidi.MIDIMessageEvent> {
    return (source) =>
        source.pipe(filter(({data}) => between(data[0] ?? 0, 176, 191) && data[1] === 7));
}

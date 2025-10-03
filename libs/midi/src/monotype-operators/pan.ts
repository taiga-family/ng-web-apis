import {filter, type MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

/**
 * Filter MIDI messages to pan changes only
 */
export function pan(): MonoTypeOperatorFunction<WebMidi.MIDIMessageEvent> {
    return (source) =>
        source.pipe(
            filter(({data}) => between(data[0] ?? 0, 176, 191) && data[1] === 10),
        );
}

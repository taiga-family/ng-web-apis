import {filter, type MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

/**
 * Filter MIDI messages to sustain pedal changes only
 */
export function sustainPedal(): MonoTypeOperatorFunction<WebMidi.MIDIMessageEvent> {
    return (source) =>
        source.pipe(
            filter(({data}) => between(data.at(0) ?? 0, 176, 191) && data.at(1) === 64),
        );
}

import {filter, MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Filter MIDI messages to modulation wheel changes only
 */
export function modulationWheel(): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return source =>
        source.pipe(filter(({data}) => between(data[0], 176, 191) && data[1] === 1));
}

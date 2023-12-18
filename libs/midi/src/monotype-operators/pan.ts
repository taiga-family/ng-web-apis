import {filter, MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Filter MIDI messages to pan changes only
 */
export function pan(): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return source =>
        source.pipe(filter(({data}) => between(data[0], 176, 191) && data[1] === 10));
}

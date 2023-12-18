import {filter, MonoTypeOperatorFunction} from 'rxjs';

import {between} from '../utils/between';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Filter MIDI messages to pitch bend changes only
 */
export function pitchBend(): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return source => source.pipe(filter(({data}) => between(data[0], 224, 239)));
}

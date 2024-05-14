import {describe, expect, it} from '@jest/globals';
import {of} from 'rxjs';

import {toTimeStamp} from '../src/operators/to-time-stamp';

describe('toTime', () => {
    it('extracts receivedTime timestamp', () => {
        const event = new MIDIMessageEvent('midimessage', {
            data: new Uint8Array([1, 2, 3]),
        }) as WebMidi.MIDIMessageEvent;

        of(event)
            .pipe(toTimeStamp())
            .subscribe(result => {
                expect(result).toBe(event.timeStamp);
            });
    });
});

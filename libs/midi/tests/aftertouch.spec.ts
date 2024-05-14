import {describe, expect, it} from '@jest/globals';
import {from} from 'rxjs';

import {aftertouch} from '../src/monotype-operators/aftertouch';

describe('aftertouch', () => {
    it('lets aftertouch events through', () => {
        const events: WebMidi.MIDIMessageEvent[] = Array.from({length: 3}, (_, i) => {
            const data = new Uint8Array([i + 207, 2, 3]);
            const receivedTime = 1.234;

            return new MIDIMessageEvent('midimessage', {data, receivedTime} as any);
        }) as WebMidi.MIDIMessageEvent[];

        const processed: any[] = [];

        from(events)
            .pipe(aftertouch())
            .subscribe(result => {
                processed.push(result);
            });

        expect(processed[0]).toBe(events[1]);
        expect(processed[1]).toBe(events[2]);
    });
});

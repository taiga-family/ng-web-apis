import {of} from 'rxjs';

import {toData} from '../src/operators/to-data';

describe('toData', () => {
    it('extracts data array', () => {
        const event = new MIDIMessageEvent('midimessage', {
            data: new Uint8Array([1, 2, 3]),
        }) as WebMidi.MIDIMessageEvent;

        of(event)
            .pipe(toData())
            .subscribe(result => {
                expect(result).toBe(event.data);
            });
    });
});

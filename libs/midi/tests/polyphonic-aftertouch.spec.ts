import {from} from 'rxjs';

import {polyphonicAftertouch} from '../src/monotype-operators/polyphonic-aftertouch';

describe(`polyphonicAftertouch`, () => {
    it(`lets polyphonic aftertouch events through`, () => {
        const events = Array.from({length: 3}, (_, i) => {
            const data = new Uint8Array([i + 159, 2, 3]);
            const receivedTime = 1.234;

            // @ts-ignore
            return new MIDIMessageEvent(`midimessage`, {data, receivedTime});
        });

        const processed: any[] = [];

        from(events)
            .pipe(polyphonicAftertouch())
            .subscribe(result => {
                processed.push(result);
            });

        expect(processed[0]).toBe(events[1]);
        expect(processed[1]).toBe(events[2]);
    });
});

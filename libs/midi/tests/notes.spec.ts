import {from} from 'rxjs';

import {notes} from '../src/monotype-operators/notes';

describe(`notes`, () => {
    it(`lets note played events through and converts noteOff to noteOn with 0 velocity`, () => {
        const events = Array.from({length: 3}, (_, i) => {
            const data = new Uint8Array([i * 16 + 127, 7, 3]);
            const receivedTime = 1.234;

            // @ts-ignore
            return new MIDIMessageEvent(`midimessage`, {data, receivedTime});
        });

        const processed: any[] = [];

        from(events)
            .pipe(notes())
            .subscribe(result => {
                processed.push(result);
            });

        expect(processed[0].data[0]).toBe(159);
        expect(processed[0].data[2]).toBe(0);
        expect(processed[0]).toBe(events[1]);
        expect(processed[1]).toBe(events[2]);
    });
});

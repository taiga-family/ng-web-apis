import {from} from 'rxjs';

import {pan} from '../src/monotype-operators/pan';

describe(`pan`, () => {
    it(`lets main volume events through`, () => {
        const events = Array.from({length: 3}, (_, i) => {
            const data = new Uint8Array([i + 175, 10, 3]);
            const receivedTime = 1.234;

            // @ts-ignore
            return new MIDIMessageEvent(`midimessage`, {data, receivedTime});
        });

        const processed: any[] = [];

        from(events)
            .pipe(pan())
            .subscribe(result => {
                processed.push(result);
            });

        expect(processed[0]).toBe(events[1]);
        expect(processed[1]).toBe(events[2]);
    });
});

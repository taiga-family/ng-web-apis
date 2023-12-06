import {of} from 'rxjs';

import {toData} from '../src/operators/to-data';

describe(`toData`, () => {
    it(`extracts data array`, () => {
        // @ts-ignore
        const event = new MIDIMessageEvent(`midimessage`, {
            data: new Uint8Array([1, 2, 3]),
        });

        of(event)
            .pipe(toData())
            .subscribe(result => {
                expect(result).toBe(event.data);
            });
    });
});

import {of} from 'rxjs';

import {toDataByte} from '../src/operators/to-data-byte';

describe(`toDataByte`, () => {
    it(`extracts data byte`, () => {
        // @ts-ignore
        const event = new MIDIMessageEvent(`midimessage`, {
            data: new Uint8Array([1, 2, 3]),
        });

        of(event)
            .pipe(toDataByte())
            .subscribe(result => {
                expect(result).toBe(2);
            });
    });
});

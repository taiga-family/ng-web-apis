import {of} from 'rxjs';

import {toStatusByte} from '../src/operators/to-status-byte';

describe(`toStatusByte`, () => {
    it(`extracts status byte`, () => {
        // @ts-ignore
        const event = new MIDIMessageEvent(`midimessage`, {
            data: new Uint8Array([1, 2, 3]),
        });

        of(event)
            .pipe(toStatusByte())
            .subscribe(result => {
                expect(result).toBe(1);
            });
    });
});

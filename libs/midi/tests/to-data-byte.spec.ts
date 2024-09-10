import {toDataByte} from '@ng-web-apis/midi';
import {of} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('toDataByte', () => {
    it('extracts data byte', () => {
        const event = new MIDIMessageEvent('midimessage', {
            data: new Uint8Array([1, 2, 3]),
        }) as WebMidi.MIDIMessageEvent;

        of(event)
            .pipe(toDataByte())
            .subscribe((result) => {
                expect(result).toBe(2);
            });
    });
});

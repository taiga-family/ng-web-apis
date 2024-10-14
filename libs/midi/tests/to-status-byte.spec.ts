import {toStatusByte} from '@ng-web-apis/midi';
import {of} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('toStatusByte', () => {
    it('extracts status byte', () => {
        const event = new MIDIMessageEvent('midimessage', {
            data: new Uint8Array([1, 2, 3]),
        }) as WebMidi.MIDIMessageEvent;

        of(event)
            .pipe(toStatusByte())
            .subscribe((result) => {
                expect(result).toBe(1);
            });
    });
});

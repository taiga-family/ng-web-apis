import {toValueByte} from '@ng-web-apis/midi';
import {of} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('toValueByte', () => {
    it('extracts value byte', () => {
        const event = new MIDIMessageEvent('midimessage', {
            data: new Uint8Array([1, 2, 3]),
        }) as WebMidi.MIDIMessageEvent;

        of(event)
            .pipe(toValueByte())
            .subscribe((result) => {
                expect(result).toBe(3);
            });
    });
});

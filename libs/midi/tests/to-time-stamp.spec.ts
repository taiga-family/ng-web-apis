import {toTimeStamp} from '@ng-web-apis/midi';
import {of} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('toTime', () => {
    it('extracts receivedTime timestamp', () => {
        const event = new MIDIMessageEvent('midimessage', {
            data: new Uint8Array([1, 2, 3]),
        }) as WebMidi.MIDIMessageEvent;

        of(event)
            .pipe(toTimeStamp())
            .subscribe((result) => {
                expect(result).toBe(event.timeStamp);
            });
    });
});

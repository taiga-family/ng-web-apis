import {mainVolume} from '@ng-web-apis/midi';
import {from} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('mainVolume', () => {
    it('lets main volume events through', () => {
        const events: WebMidi.MIDIMessageEvent[] = Array.from({length: 3}, (_, i) => {
            const data = new Uint8Array([i + 175, 7, 3]);
            const receivedTime = 1.234;

            return new MIDIMessageEvent('midimessage', {data, receivedTime} as any);
        }) as WebMidi.MIDIMessageEvent[];

        const processed: any[] = [];

        from(events)
            .pipe(mainVolume())
            .subscribe((result) => {
                processed.push(result);
            });

        expect(processed[0]).toBe(events[1]);
        expect(processed[1]).toBe(events[2]);
    });
});

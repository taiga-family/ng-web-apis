import {from} from 'rxjs';

import {mainVolume} from '../src/monotype-operators/main-volume';

describe('mainVolume', () => {
    it('lets main volume events through', () => {
        const events = Array.from({length: 3}, (_, i) => {
            const data = new Uint8Array([i + 175, 7, 3]);
            const receivedTime = 1.234;

            // @ts-ignore
            return new MIDIMessageEvent('midimessage', {data, receivedTime});
        });

        const processed: any[] = [];

        from(events)
            .pipe(mainVolume())
            .subscribe(result => {
                processed.push(result);
            });

        expect(processed[0]).toBe(events[1]);
        expect(processed[1]).toBe(events[2]);
    });
});

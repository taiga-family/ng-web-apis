import {from} from 'rxjs';
import {filterByChannel} from '../src/monotype-operators/filter-by-channel';

describe('aftertouch', () => {
    it('filters events by channel', () => {
        const events = Array.from({length: 3}, (_, i) => {
            const data = new Uint8Array([i, 2, 3]);
            const receivedTime = 1.234;

            // @ts-ignore
            return new MIDIMessageEvent('midimessage', {data, receivedTime});
        });

        const processed: any[] = [];

        from(events)
            .pipe(filterByChannel(1))
            .subscribe(result => {
                processed.push(result);
            });

        expect(processed[0]).toBe(events[1]);
        expect(processed.length).toBe(1);
    });
});

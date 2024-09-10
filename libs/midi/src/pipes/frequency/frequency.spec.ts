import {FrequencyPipe} from '@ng-web-apis/midi';

window.onbeforeunload = jasmine.createSpy();

describe('FrequencyPipe', () => {
    const pipe = new FrequencyPipe();

    it('default tuning', () => {
        expect(pipe.transform(69)).toBe(440);
    });

    it('altered tuning', () => {
        expect(Math.round(pipe.transform(71, 392))).toBe(440);
    });
});

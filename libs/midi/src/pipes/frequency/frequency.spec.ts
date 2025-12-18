import {WaMidiFrequencyPipe} from '@ng-web-apis/midi';

window.onbeforeunload = jasmine.createSpy();

describe('WaMidiFrequencyPipe', () => {
    const pipe = new WaMidiFrequencyPipe();

    it('default tuning', () => {
        expect(pipe.transform(69)).toBe(440);
    });

    it('altered tuning', () => {
        expect(Math.round(pipe.transform(71, 392))).toBe(440);
    });
});

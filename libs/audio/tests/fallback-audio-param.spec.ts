import {fallbackAudioParam} from '../src/utils/fallback-audio-param';

describe('fallbackAudioParam', () => {
    it('works with undefined', () => {
        expect(fallbackAudioParam()).toBe(0);
    });

    it('works with numbers', () => {
        expect(fallbackAudioParam(1)).toBe(1);
    });

    it('works with automations', () => {
        expect(fallbackAudioParam({value: 2, duration: 1, mode: 'exponential'})).toBe(2);
    });

    it('works with curves', () => {
        expect(fallbackAudioParam({value: [1, 2, 3], duration: 1})).toBe(3);
    });

    it('works with array of automations', () => {
        expect(
            fallbackAudioParam([
                {value: 1, duration: 1, mode: 'linear'},
                {value: 2, duration: 1, mode: 'exponential'},
            ]),
        ).toBe(2);
    });

    it('works with array of automations and curves', () => {
        expect(
            fallbackAudioParam([
                {value: 1, duration: 1, mode: 'linear'},
                {value: 2, duration: 1, mode: 'exponential'},
                {value: [1, 2, 3], duration: 1},
            ]),
        ).toBe(3);
    });
});

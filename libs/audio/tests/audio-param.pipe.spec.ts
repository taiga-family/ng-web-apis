import {WebAudioParamPipe} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('WebAudioParamPipe', () => {
    const pipe = new WebAudioParamPipe();

    it('uses exponential mode by default', () => {
        expect(pipe.transform(10, 1)).toEqual({
            value: 10,
            duration: 1,
            mode: 'exponential',
        });
    });

    it('uses given mode', () => {
        expect(pipe.transform(10, 1, 'linear')).toEqual({
            value: 10,
            duration: 1,
            mode: 'linear',
        });
    });

    it('handles array', () => {
        expect(pipe.transform([10, 0, 10], 1, 'linear')).toEqual({
            value: [10, 0, 10],
            duration: 1,
        });
    });
});

import {audioParam} from '../src/decorators/audio-param';

describe('audioParam decorator', () => {
    it('falls back to plain property when not used on proper AudioParam', () => {
        const context = new AudioContext();
        const gain: any = new GainNode(context);

        audioParam()(gain, 'prop');
        gain.prop = 237;

        expect(gain.prop).toBe(237);
    });
});

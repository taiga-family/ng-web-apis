import {WebAudioPeriodicWavePipe} from '../src/pipes/periodic-wave.pipe';

describe('waPeriodicWave', () => {
    const pipe = new WebAudioPeriodicWavePipe(new AudioContext());

    // TODO: need investigate why
    // Error: Failed to execute 'createPeriodicWave' on 'BaseAudioContext':
    // The length of the real array provided (1) is less than the minimum bound (2)
    xit('creates PeriodicWave', () => {
        expect(pipe.transform([10]) instanceof PeriodicWave).toBe(true);
    });
});

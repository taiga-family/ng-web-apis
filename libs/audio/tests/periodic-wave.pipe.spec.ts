import {TestBed} from '@angular/core/testing';
import {AUDIO_CONTEXT, WebAudioPeriodicWavePipe} from '@ng-web-apis/audio';

describe('waPeriodicWave', () => {
    // TODO: need investigate why
    // Error: Failed to execute 'createPeriodicWave' on 'BaseAudioContext':
    // The length of the real array provided (1) is less than the minimum bound (2)
    it.skip('creates PeriodicWave', () => {
        TestBed.overrideProvider(AUDIO_CONTEXT, {
            useValue: new AudioContext(),
        }).runInInjectionContext(() => {
            const pipe = new WebAudioPeriodicWavePipe();

            expect(pipe.transform([10]) instanceof PeriodicWave).toBe(true);
        });
    });
});

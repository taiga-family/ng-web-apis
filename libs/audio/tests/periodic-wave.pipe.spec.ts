import {TestBed} from '@angular/core/testing';
import {WA_AUDIO_CONTEXT, WaPeriodicWavePipe} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('waPeriodicWave', () => {
    // TODO: need investigate why
    // Error: Failed to execute 'createPeriodicWave' on 'BaseAudioContext':
    // The length of the real array provided (1) is less than the minimum bound (2)
    xit('creates PeriodicWave', () => {
        TestBed.overrideProvider(WA_AUDIO_CONTEXT, {
            useValue: new AudioContext(),
        }).runInInjectionContext(() => {
            const pipe = new WaPeriodicWavePipe();

            expect(pipe.transform([10]) instanceof PeriodicWave).toBe(true);
        });
    });
});

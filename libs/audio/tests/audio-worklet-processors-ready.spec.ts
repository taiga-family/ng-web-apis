import {TestBed} from '@angular/core/testing';
import {AUDIO_CONTEXT} from '../src/tokens/audio-context';
import {AUDIO_WORKLET_PROCESSORS_READY} from '../src/tokens/audio-worklet-processors-ready';

describe('AUDIO_WORKLET_PROCESSORS_READY', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: AUDIO_CONTEXT,
                    useValue: {},
                },
            ],
        });
    });

    // TODO: need investigate why
    // AUDIO_WORKLET_PROCESSORS_READY rejects Promise if worklets are not supported FAILED
    xit('rejects Promise if worklets are not supported', done => {
        let rejected = false;

        TestBed.inject(AUDIO_WORKLET_PROCESSORS_READY).catch(() => {
            rejected = true;
        });

        setTimeout(() => {
            expect(rejected).toBe(true);
            done();
        });
    });
});

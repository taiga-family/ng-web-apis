import {TestBed} from '@angular/core/testing';
import {WA_AUDIO_CONTEXT, WA_AUDIO_WORKLET_PROCESSORS_READY} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('WA_AUDIO_WORKLET_PROCESSORS_READY', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WA_AUDIO_CONTEXT,
                    useValue: {},
                },
            ],
        });
    });

    // TODO: need investigate why
    // WA_AUDIO_WORKLET_PROCESSORS_READY rejects Promise if worklets are not supported FAILED
    xit('rejects Promise if worklets are not supported', (done) => {
        let rejected = false;

        TestBed.inject(WA_AUDIO_WORKLET_PROCESSORS_READY).catch(() => {
            rejected = true;
        });

        setTimeout(() => {
            expect(rejected).toBe(true);

            done();
        });
    });
});

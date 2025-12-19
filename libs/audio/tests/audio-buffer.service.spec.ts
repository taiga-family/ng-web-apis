import {TestBed} from '@angular/core/testing';
import {WaAudioBufferService} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('WaAudioBufferService', () => {
    let service: WaAudioBufferService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WaAudioBufferService);
    });

    it('turns audio file to AudioBuffer', (done) => {
        void service.fetch('/base/demo.mp3').then((buffer) => {
            expect(buffer instanceof AudioBuffer).toBe(true);

            done();
        });
    });

    it('caches AudioBuffer', (done) => {
        void service.fetch('/base/demo.mp3').then((buffer1) => {
            void service.fetch('/base/demo.mp3').then((buffer2) => {
                expect(buffer1).toBe(buffer2);

                done();
            });
        });
    });
});

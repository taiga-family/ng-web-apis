import {TestBed} from '@angular/core/testing';
import {AudioBufferService} from '../src/services/audio-buffer.service';

describe('AudioBufferService', () => {
    let service: AudioBufferService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    beforeEach(() => {
        service = TestBed.get(AudioBufferService);
    });

    it('turns audio file to AudioBuffer', done => {
        service.fetch('/base/demo.mp3').then(buffer => {
            expect(buffer instanceof AudioBuffer).toBe(true);
            done();
        });
    });

    it('caches AudioBuffer', done => {
        service.fetch('/base/demo.mp3').then(buffer1 => {
            service.fetch('/base/demo.mp3').then(buffer2 => {
                expect(buffer1).toBe(buffer2);
                done();
            });
        });
    });
});

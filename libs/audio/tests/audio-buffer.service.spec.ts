import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';

import {AudioBufferService} from '../src/services/audio-buffer.service';

describe('AudioBufferService', () => {
    let service: AudioBufferService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AudioBufferService);
    });

    it('turns audio file to AudioBuffer', done => {
        void service.fetch('/base/demo.mp3').then(buffer => {
            expect(buffer instanceof AudioBuffer).toBe(true);
            done();
        });
    });

    it('caches AudioBuffer', done => {
        void service.fetch('/base/demo.mp3').then(buffer1 => {
            void service.fetch('/base/demo.mp3').then(buffer2 => {
                expect(buffer1).toBe(buffer2);
                done();
            });
        });
    });
});

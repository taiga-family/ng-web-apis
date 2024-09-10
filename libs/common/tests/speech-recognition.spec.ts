import {TestBed} from '@angular/core/testing';
import {SPEECH_RECOGNITION} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('SPEECH_RECOGNITION', () => {
    it('injects webkitSpeechRecognition class', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(SPEECH_RECOGNITION)).toBe(
            (globalThis as any).webkitSpeechRecognition,
        );
    });

    it('injects null when browser does not support SpeechRecognition', () => {
        TestBed.configureTestingModule({});

        const speechRecognition = (globalThis as any).webkitSpeechRecognition;

        (globalThis as any).webkitSpeechRecognition = undefined;

        expect(TestBed.inject(SPEECH_RECOGNITION)).toBeNull();

        (globalThis as any).webkitSpeechRecognition = speechRecognition;
    });
});

import {TestBed} from '@angular/core/testing';
import {WA_SPEECH_RECOGNITION} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_SPEECH_RECOGNITION', () => {
    it('injects webkitSpeechRecognition class', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_SPEECH_RECOGNITION)).toBe(
            (globalThis as any).webkitSpeechRecognition,
        );
    });

    it('injects null when browser does not support SpeechRecognition', () => {
        TestBed.configureTestingModule({});

        const speechRecognition = (globalThis as any).webkitSpeechRecognition;

        (globalThis as any).webkitSpeechRecognition = undefined;

        expect(TestBed.inject(WA_SPEECH_RECOGNITION)).toBeNull();

        (globalThis as any).webkitSpeechRecognition = speechRecognition;
    });
});

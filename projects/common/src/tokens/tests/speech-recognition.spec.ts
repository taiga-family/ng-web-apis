import {TestBed} from '@angular/core/testing';
import {SPEECH_RECOGNITION} from '../speech-recognition';

describe('SPEECH_RECOGNITION', () => {
    it('injects webkitSpeechRecognition class', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(SPEECH_RECOGNITION)).toBe(
            (window as any).webkitSpeechRecognition,
        );
    });

    it('injects null when browser does not support SpeechRecognition', () => {
        TestBed.configureTestingModule({});

        const speechRecognition = (window as any).webkitSpeechRecognition;

        (window as any).webkitSpeechRecognition = undefined;

        expect(TestBed.get(SPEECH_RECOGNITION)).toBeNull();

        (window as any).webkitSpeechRecognition = speechRecognition;
    });
});

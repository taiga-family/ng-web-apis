import {TestBed} from '@angular/core/testing';

import {SPEECH_SYNTHESIS} from '../src/tokens/speech-synthesis';

describe('SPEECH_SYNTHESIS', () => {
    it('injects window.speechSynthesis object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(SPEECH_SYNTHESIS)).toBe(window.speechSynthesis);
    });
});

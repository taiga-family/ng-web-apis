import {TestBed} from '@angular/core/testing';
import {WA_SPEECH_SYNTHESIS} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_SPEECH_SYNTHESIS', () => {
    it('injects window.speechSynthesis object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_SPEECH_SYNTHESIS)).toBe(window.speechSynthesis);
    });
});

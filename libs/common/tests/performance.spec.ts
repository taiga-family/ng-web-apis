import {TestBed} from '@angular/core/testing';
import {WA_PERFORMANCE} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_PERFORMANCE', () => {
    it('injects window.performance object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_PERFORMANCE)).toBe(window.performance);
    });
});

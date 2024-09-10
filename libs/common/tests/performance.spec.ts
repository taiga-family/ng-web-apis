import {TestBed} from '@angular/core/testing';
import {PERFORMANCE} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('PERFORMANCE', () => {
    it('injects window.performance object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(PERFORMANCE)).toBe(window.performance);
    });
});

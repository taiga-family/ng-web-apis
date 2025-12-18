import {TestBed} from '@angular/core/testing';
import {WA_USER_AGENT} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_USER_AGENT', () => {
    it('injects window.navigator.userAgent string', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_USER_AGENT)).toBe(window.navigator.userAgent);
    });
});

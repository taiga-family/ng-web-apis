import {TestBed} from '@angular/core/testing';
import {WA_SESSION_STORAGE} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_SESSION_STORAGE', () => {
    it('injects window.sessionStorage object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_SESSION_STORAGE)).toBe(window.sessionStorage);
    });
});

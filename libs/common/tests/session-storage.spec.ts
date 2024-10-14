import {TestBed} from '@angular/core/testing';
import {SESSION_STORAGE} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('SESSION_STORAGE', () => {
    it('injects window.sessionStorage object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(SESSION_STORAGE)).toBe(window.sessionStorage);
    });
});

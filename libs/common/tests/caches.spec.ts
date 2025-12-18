import {TestBed} from '@angular/core/testing';
import {WA_CACHES} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_CACHES', () => {
    it('injects window.caches object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_CACHES)).toBe(window.caches);
    });
});

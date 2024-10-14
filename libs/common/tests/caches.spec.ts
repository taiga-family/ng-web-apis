import {TestBed} from '@angular/core/testing';
import {CACHES} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('CACHES', () => {
    it('injects window.caches object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(CACHES)).toBe(window.caches);
    });
});

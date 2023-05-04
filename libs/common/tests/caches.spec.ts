import {TestBed} from '@angular/core/testing';

import {CACHES} from '../src/tokens/caches';

describe('CACHES', () => {
    it('injects window.caches object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(CACHES)).toBe(window.caches);
    });
});

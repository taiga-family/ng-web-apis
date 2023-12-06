import {TestBed} from '@angular/core/testing';

import {PERFORMANCE} from '../src/tokens/performance';

describe(`PERFORMANCE`, () => {
    it(`injects window.performance object`, () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(PERFORMANCE)).toBe(window.performance);
    });
});

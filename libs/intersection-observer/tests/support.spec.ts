import {TestBed} from '@angular/core/testing';

import {INTERSECTION_OBSERVER_SUPPORT} from '../src/tokens/support';

describe('INTERSECTION_OBSERVER_SUPPORT', () => {
    it('true in modern browsers', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(INTERSECTION_OBSERVER_SUPPORT)).toBe(true);
    });
});

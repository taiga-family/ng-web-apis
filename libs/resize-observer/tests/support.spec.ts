import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {RESIZE_OBSERVER_SUPPORT} from '../src/tokens/support';

describe('RESIZE_OBSERVER_SUPPORT', () => {
    it('true in modern browsers', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(RESIZE_OBSERVER_SUPPORT)).toBe(true);
    });
});

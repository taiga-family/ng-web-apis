import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {LOCATION} from '../src/tokens/location';

describe('LOCATION', () => {
    it('injects window.location object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(LOCATION)).toBe(window.location);
    });
});

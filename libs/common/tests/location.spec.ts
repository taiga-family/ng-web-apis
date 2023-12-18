import {TestBed} from '@angular/core/testing';

import {LOCATION} from '../src/tokens/location';

describe('LOCATION', () => {
    it('injects window.location object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(LOCATION)).toBe(window.location);
    });
});

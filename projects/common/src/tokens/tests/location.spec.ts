import {TestBed} from '@angular/core/testing';

import {LOCATION} from '../location';

describe('LOCATION', () => {
    it('injects window.location object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(LOCATION)).toBe(window.location);
    });
});

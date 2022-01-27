import {TestBed} from '@angular/core/testing';

import {CRYPTO} from '../crypto';

describe('CRYPTO', () => {
    it('injects window.crypto object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(CRYPTO)).toBe(window.crypto);
    });
});

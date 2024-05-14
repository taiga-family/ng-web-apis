import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {CRYPTO} from '../src/tokens/crypto';

describe('CRYPTO', () => {
    it('injects window.crypto object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(CRYPTO)).toBe(window.crypto);
    });
});

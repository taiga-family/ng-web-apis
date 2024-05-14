import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {SESSION_STORAGE} from '../src/tokens/session-storage';

describe('SESSION_STORAGE', () => {
    it('injects window.sessionStorage object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(SESSION_STORAGE)).toBe(window.sessionStorage);
    });
});

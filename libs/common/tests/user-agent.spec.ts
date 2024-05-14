import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {USER_AGENT} from '../src/tokens/user-agent';

describe('USER_AGENT', () => {
    it('injects window.navigator.userAgent string', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(USER_AGENT)).toBe(window.navigator.userAgent);
    });
});

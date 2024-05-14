import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {HISTORY} from '../src/tokens/history';

describe('HISTORY', () => {
    it('injects window.history object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(HISTORY)).toBe(window.history);
    });
});

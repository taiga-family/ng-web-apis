import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {NAVIGATOR} from '../src/tokens/navigator';

describe('WINDOW', () => {
    it('injects window.navigator object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(NAVIGATOR)).toBe(window.navigator);
    });
});

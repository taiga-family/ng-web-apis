import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {CANVAS_PROPERTIES} from '../src/tokens/canvas-properties';

describe('CANVAS_PROPERTIES', () => {
    it('is empty by default', () => {
        expect(TestBed.inject(CANVAS_PROPERTIES)).toEqual([]);
    });
});

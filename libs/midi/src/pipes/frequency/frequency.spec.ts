import {describe, expect, it} from '@jest/globals';

import {FrequencyPipe} from './frequency.pipe';

describe('FrequencyPipe', () => {
    const pipe = new FrequencyPipe();

    it('default tuning', () => {
        expect(pipe.transform(69)).toBe(440);
    });

    it('altered tuning', () => {
        expect(Math.round(pipe.transform(71, 392))).toBe(440);
    });
});

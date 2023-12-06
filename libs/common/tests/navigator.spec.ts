import {TestBed} from '@angular/core/testing';

import {NAVIGATOR} from '../src/tokens/navigator';

describe(`WINDOW`, () => {
    it(`injects window.navigator object`, () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(NAVIGATOR)).toBe(window.navigator);
    });
});

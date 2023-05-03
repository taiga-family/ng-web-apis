import {TestBed} from '@angular/core/testing';

import {NAVIGATOR} from '../src/tokens/navigator';

describe('WINDOW', () => {
    it('injects window.navigator object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(NAVIGATOR)).toBe(window.navigator);
    });
});

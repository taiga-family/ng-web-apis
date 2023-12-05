import {TestBed} from '@angular/core/testing';

import {SCREEN} from '../src/tokens/screen';

describe('SCREEN', () => {
    it('injects window.screen object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(SCREEN)).toBe(window.screen);
    });
});

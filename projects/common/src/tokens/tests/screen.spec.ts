import {TestBed} from '@angular/core/testing';

import {SCREEN} from '../screen';

describe('SCREEN', () => {
    it('injects window.screen object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(SCREEN)).toBe(window.screen);
    });
});

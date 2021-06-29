import {TestBed} from '@angular/core/testing';
import {HISTORY} from '../history';

describe('HISTORY', () => {
    it('injects window.history object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(HISTORY)).toBe(window.history);
    });
});

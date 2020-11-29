import {TestBed} from '@angular/core/testing';
import {COOKIE} from '../cookie';

describe('COOKIE', () => {
    it('injects document.cookie string', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(COOKIE)).toBe(document.cookie);
    });
});

import {TestBed} from '@angular/core/testing';
import {PERFORMANCE} from '../performance';

describe('PERFORMANCE', () => {
    it('injects window.performance object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(PERFORMANCE)).toBe(window.performance);
    });
});

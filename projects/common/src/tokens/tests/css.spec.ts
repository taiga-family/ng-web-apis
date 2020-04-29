import {TestBed} from '@angular/core/testing';
import {CSS} from '../css';

describe('CSS', () => {
    it('injects window.CSS object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(CSS)).toBe(window.CSS);
    });
});

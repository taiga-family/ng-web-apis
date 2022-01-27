import {DOCUMENT} from '@angular/common';
import {TestBed} from '@angular/core/testing';

import {WINDOW} from '../window';

describe('WINDOW', () => {
    it('injects global object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(WINDOW)).toBe(window);
    });

    it('throws error if global object not available', () => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: DOCUMENT,
                    useValue: {},
                },
            ],
        });

        expect(() => TestBed.get(WINDOW)).toThrow();
    });
});

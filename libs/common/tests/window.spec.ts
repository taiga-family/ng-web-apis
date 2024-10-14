import {DOCUMENT} from '@angular/common';
import {TestBed} from '@angular/core/testing';
import {WINDOW} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WINDOW', () => {
    it('injects global object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WINDOW)).toBe(window);
    });

    it('throws error if global object not available', () => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: DOCUMENT,
                    useValue: {
                        querySelectorAll: () => [],
                    },
                },
            ],
        });

        expect(() => TestBed.inject(WINDOW)).toThrow();
    });
});

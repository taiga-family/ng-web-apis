import {TestBed} from '@angular/core/testing';
import {WA_CSS, WA_WINDOW} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_CSS', () => {
    it('injects window.CSS object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_CSS)).toBe(window.CSS);
    });

    it('injects mock when CSS is not available', () => {
        TestBed.configureTestingModule({providers: [{provide: WA_WINDOW, useValue: {}}]});

        const css = TestBed.inject(WA_CSS);

        expect(css.supports('display', 'block')).toBe(false);
        expect(css.escape('<&>hapica$')).toBe('<&>hapica$');
    });
});

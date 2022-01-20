import {TestBed} from '@angular/core/testing';

import {CSS} from '../css';
import {WINDOW} from '../window';

describe('CSS', () => {
    it('injects window.CSS object', () => {
        TestBed.configureTestingModule({});

        // @ts-ignore
        expect(TestBed.get(CSS)).toBe(window.CSS);
    });

    it('injects mock when CSS is not available', () => {
        TestBed.configureTestingModule({
            providers: [{provide: WINDOW, useValue: {}}],
        });

        const css = TestBed.get(CSS);

        expect(css.supports('display', 'block')).toBe(false);
        expect(css.escape('<&>hapica$')).toBe('<&>hapica$');
    });
});

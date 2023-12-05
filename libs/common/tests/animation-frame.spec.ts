import {TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {ANIMATION_FRAME} from '../src/tokens/animation-frame';

describe('ANIMATION_FRAME', () => {
    it('passes DOMHighResTimeStamp to the subscriber', done => {
        TestBed.configureTestingModule({});

        const animationFrame$: Observable<DOMHighResTimeStamp> =
            TestBed.inject(ANIMATION_FRAME);

        animationFrame$.pipe(first()).subscribe(timestamp => {
            expect(typeof timestamp).toBe('number');
            expect(Number.isInteger(timestamp)).toBe(false);
            done();
        });
    });
});

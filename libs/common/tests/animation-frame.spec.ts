import {TestBed} from '@angular/core/testing';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {first, type Observable} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('ANIMATION_FRAME', () => {
    it('passes DOMHighResTimeStamp to the subscriber', (done) => {
        TestBed.configureTestingModule({});

        const animationFrame$: Observable<DOMHighResTimeStamp> =
            TestBed.inject(WA_ANIMATION_FRAME);

        animationFrame$.pipe(first()).subscribe((timestamp) => {
            expect(typeof timestamp).toBe('number');

            done();
        });
    });
});

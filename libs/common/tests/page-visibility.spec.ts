import {TestBed} from '@angular/core/testing';
import {WA_PAGE_VISIBILITY} from '@ng-web-apis/common';
import type {Observable} from 'rxjs';
import {first} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('PAGE_VISIBILITY', () => {
    it('watching for page visibility state', (done) => {
        TestBed.configureTestingModule({});

        const pageVisibility$: Observable<boolean> = TestBed.inject(WA_PAGE_VISIBILITY);

        pageVisibility$.pipe(first()).subscribe((state) => {
            expect(typeof state).toBe('boolean');
            expect(state).toBe(true);

            done();
        });
    });
});

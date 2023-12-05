import {TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {PAGE_VISIBILITY} from '../src/tokens/page-visibility';

describe('PAGE_VISIBILITY', () => {
    it('watching for page visibility state', done => {
        TestBed.configureTestingModule({});

        const pageVisibility$: Observable<boolean> = TestBed.inject(PAGE_VISIBILITY);

        pageVisibility$.pipe(first()).subscribe(state => {
            expect(typeof state).toBe('boolean');
            expect(state).toBe(true);
            done();
        });
    });
});

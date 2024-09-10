import {TestBed} from '@angular/core/testing';
import {RESIZE_OBSERVER_SUPPORT} from '@ng-web-apis/resize-observer';

window.onbeforeunload = jasmine.createSpy();

describe('RESIZE_OBSERVER_SUPPORT', () => {
    it('true in modern browsers', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(RESIZE_OBSERVER_SUPPORT)).toBe(true);
    });
});

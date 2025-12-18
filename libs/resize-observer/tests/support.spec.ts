import {TestBed} from '@angular/core/testing';
import {WA_RESIZE_OBSERVER_SUPPORT} from '@ng-web-apis/resize-observer';

window.onbeforeunload = jasmine.createSpy();

describe('WA_RESIZE_OBSERVER_SUPPORT', () => {
    it('true in modern browsers', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_RESIZE_OBSERVER_SUPPORT)).toBe(true);
    });
});

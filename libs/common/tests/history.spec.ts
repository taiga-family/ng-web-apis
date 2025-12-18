import {TestBed} from '@angular/core/testing';
import {WA_HISTORY} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_HISTORY', () => {
    it('injects window.history object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_HISTORY)).toBe(window.history);
    });
});

import {TestBed} from '@angular/core/testing';
import {HISTORY} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('HISTORY', () => {
    it('injects window.history object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(HISTORY)).toBe(window.history);
    });
});

import {TestBed} from '@angular/core/testing';
import {WA_SCREEN} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_SCREEN', () => {
    it('injects window.screen object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_SCREEN)).toBe(window.screen);
    });
});

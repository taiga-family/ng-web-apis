import {TestBed} from '@angular/core/testing';
import {SCREEN} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('SCREEN', () => {
    it('injects window.screen object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(SCREEN)).toBe(window.screen);
    });
});

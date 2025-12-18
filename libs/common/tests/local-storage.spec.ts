import {TestBed} from '@angular/core/testing';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_LOCAL_STORAGE', () => {
    it('injects window.localStorage object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_LOCAL_STORAGE)).toBe(window.localStorage);
    });
});

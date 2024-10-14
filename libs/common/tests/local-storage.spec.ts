import {TestBed} from '@angular/core/testing';
import {LOCAL_STORAGE} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('LOCAL_STORAGE', () => {
    it('injects window.localStorage object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(LOCAL_STORAGE)).toBe(window.localStorage);
    });
});

import {TestBed} from '@angular/core/testing';
import {WA_NAVIGATOR} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_WINDOW', () => {
    it('injects window.navigator object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_NAVIGATOR)).toBe(window.navigator);
    });
});

import {TestBed} from '@angular/core/testing';
import {NAVIGATOR} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WINDOW', () => {
    it('injects window.navigator object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(NAVIGATOR)).toBe(window.navigator);
    });
});

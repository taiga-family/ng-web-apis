import {TestBed} from '@angular/core/testing';
import {WA_LOCATION} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_LOCATION', () => {
    it('injects window.location object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_LOCATION)).toBe(window.location);
    });
});

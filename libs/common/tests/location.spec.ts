import {TestBed} from '@angular/core/testing';
import {LOCATION} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('LOCATION', () => {
    it('injects window.location object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(LOCATION)).toBe(window.location);
    });
});

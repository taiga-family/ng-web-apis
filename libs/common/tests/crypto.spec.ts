import {TestBed} from '@angular/core/testing';
import {CRYPTO} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('CRYPTO', () => {
    it('injects window.crypto object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(CRYPTO)).toBe(window.crypto);
    });
});

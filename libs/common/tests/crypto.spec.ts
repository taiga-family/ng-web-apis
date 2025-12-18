import {TestBed} from '@angular/core/testing';
import {WA_CRYPTO} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_CRYPTO', () => {
    it('injects window.crypto object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_CRYPTO)).toBe(window.crypto);
    });
});

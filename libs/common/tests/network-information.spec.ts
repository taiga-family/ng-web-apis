import {TestBed} from '@angular/core/testing';
import {NAVIGATOR, NETWORK_INFORMATION} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('NETWORK_INFORMATION', () => {
    it('injects window.navigator.connection object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(NETWORK_INFORMATION)).toBe(
            (window.navigator as any).connection,
        );
    });

    it('injects null in unsupported browsers', () => {
        TestBed.configureTestingModule({
            providers: [{provide: NAVIGATOR, useValue: {}}],
        });

        expect(TestBed.inject(NETWORK_INFORMATION)).toBeNull();
    });
});

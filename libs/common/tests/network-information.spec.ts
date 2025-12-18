import {TestBed} from '@angular/core/testing';
import {WA_NAVIGATOR, WA_NETWORK_INFORMATION} from '@ng-web-apis/common';

window.onbeforeunload = jasmine.createSpy();

describe('WA_NETWORK_INFORMATION', () => {
    it('injects window.navigator.connection object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WA_NETWORK_INFORMATION)).toBe(
            (window.navigator as any).connection,
        );
    });

    it('injects null in unsupported browsers', () => {
        TestBed.configureTestingModule({
            providers: [{provide: WA_NAVIGATOR, useValue: {}}],
        });

        expect(TestBed.inject(WA_NETWORK_INFORMATION)).toBeNull();
    });
});

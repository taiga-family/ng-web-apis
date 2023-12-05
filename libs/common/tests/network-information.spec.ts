import {TestBed} from '@angular/core/testing';

import {NAVIGATOR} from '../src/tokens/navigator';
import {NETWORK_INFORMATION} from '../src/tokens/network-information';

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

        expect(TestBed.inject(NETWORK_INFORMATION)).toBe(null);
    });
});

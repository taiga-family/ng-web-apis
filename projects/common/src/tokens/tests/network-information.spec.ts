import {TestBed} from '@angular/core/testing';
import {NAVIGATOR} from '../navigator';
import {NETWORK_INFORMATION} from '../network-information';

describe('NETWORK_INFORMATION', () => {
    it('injects window.navigator.connection object', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.get(NETWORK_INFORMATION)).toBe(window.navigator.connection);
    });

    it('injects null in unsupported browsers', () => {
        TestBed.configureTestingModule({
            providers: [{provide: NAVIGATOR, useValue: {}}],
        });

        expect(TestBed.get(NETWORK_INFORMATION)).toBe(null);
    });
});

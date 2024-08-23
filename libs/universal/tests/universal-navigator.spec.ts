import { WA_NAVIGATOR } from "@ng-web-apis/common";
import {TestBed} from '@angular/core/testing';
import {UNIVERSAL_NAVIGATOR} from '../src/constants/universal-navigator';
import {provideUserAgent} from '../src/utils/provide-user-agent';

describe('UNIVERSAL_NAVIGATOR', () => {
    const req = {
        headers: {
            'user-agent': 'Chrome',
        },
    };

    it('mocks the hell out of window.navigator', () => {
        TestBed.configureTestingModule({
            providers: [UNIVERSAL_NAVIGATOR],
        });

        const mock: Navigator = TestBed.inject(WA_NAVIGATOR);

        expect(mock.userAgent).toBe('');
        expect(mock.plugins.refresh).not.toThrow();
        expect(mock.plugins.item(0)).toBeNull();
        expect(mock.plugins.namedItem('whatever')).toBeNull();
    });

    it('reads provided user agent', () => {
        TestBed.configureTestingModule({
            providers: [provideUserAgent(req), UNIVERSAL_NAVIGATOR],
        });

        expect(TestBed.inject(WA_NAVIGATOR).userAgent).toBe('Chrome');
    });
});

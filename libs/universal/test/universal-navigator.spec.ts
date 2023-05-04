import {TestBed} from '@angular/core/testing';
import {NAVIGATOR} from '@ng-web-apis/common';
import {provideUserAgent} from '../src/utils/provide-user-agent';
import {UNIVERSAL_NAVIGATOR} from '../src/constants/universal-navigator';

describe('UNIVERSAL_NAVIGATOR', () => {
    const req = {
        headers: {
            'user-agent': 'Chrome',
        },
    };

    it('Mocks the hell out of window.navigator', () => {
        TestBed.configureTestingModule({
            providers: [UNIVERSAL_NAVIGATOR],
        });

        const mock: Navigator = TestBed.get(NAVIGATOR);

        expect(mock.userAgent).toBe('');
        expect(mock.plugins.refresh).not.toThrow();
        expect(mock.plugins.item(0)).toBeNull();
        expect(mock.plugins.namedItem('whatever')).toBeNull();
    });

    it('Reads provided user agent', () => {
        TestBed.configureTestingModule({
            providers: [provideUserAgent(req), UNIVERSAL_NAVIGATOR],
        });

        expect(TestBed.get(NAVIGATOR).userAgent).toBe('Chrome');
    });
});

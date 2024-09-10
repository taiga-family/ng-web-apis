import {TestBed} from '@angular/core/testing';
import {provideUserAgent, SSR_USER_AGENT} from '@ng-web-apis/universal';

window.onbeforeunload = jasmine.createSpy();

describe('provideUserAgent', () => {
    const req = {
        headers: {
            'user-agent': 'Chrome',
        },
    };

    it('parses request', () => {
        TestBed.configureTestingModule({
            providers: [provideUserAgent(req)],
        });

        expect(String(TestBed.inject(SSR_USER_AGENT))).toBe('Chrome');
    });
});

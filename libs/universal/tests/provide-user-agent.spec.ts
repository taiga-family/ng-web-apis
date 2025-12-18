import {TestBed} from '@angular/core/testing';
import {provideUserAgent, WA_SSR_USER_AGENT} from '@ng-web-apis/universal';

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

        expect(TestBed.inject(WA_SSR_USER_AGENT) satisfies string).toBe('Chrome');
    });
});

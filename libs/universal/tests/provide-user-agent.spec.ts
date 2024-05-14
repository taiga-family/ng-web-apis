import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {SSR_USER_AGENT} from '../src/tokens/ssr-user-agent';
import {provideUserAgent} from '../src/utils/provide-user-agent';

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

import {type IncomingHttpHeaders} from 'node:http';

import {type ValueProvider} from '@angular/core';

import {WA_SSR_USER_AGENT} from '../tokens/ssr-user-agent';

export function provideUserAgent(req: {headers: IncomingHttpHeaders}): ValueProvider {
    return {
        provide: WA_SSR_USER_AGENT,
        useValue: req.headers['user-agent'],
    };
}

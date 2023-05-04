import {ValueProvider} from '@angular/core';
import {IncomingHttpHeaders} from 'http';
import {SSR_USER_AGENT} from '../tokens/ssr-user-agent';

export function provideUserAgent(req: {headers: IncomingHttpHeaders}): ValueProvider {
    return {
        provide: SSR_USER_AGENT,
        useValue: req.headers['user-agent'],
    };
}

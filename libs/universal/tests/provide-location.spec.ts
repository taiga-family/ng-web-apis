import type {IncomingMessage} from 'node:http';

import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from '@jest/globals';

import {SSR_LOCATION} from '../src/tokens/ssr-location';
import {provideLocation} from '../src/utils/provide-location';

describe('provideLocation', () => {
    it('parses request', () => {
        const req: any = {
            url: '/hapica',
            socket: {
                encrypted: true,
            },
            headers: {
                host: 'localhost:8080',
            },
        };

        TestBed.configureTestingModule({
            providers: [provideLocation(req as IncomingMessage)],
        });

        expect(String(TestBed.inject(SSR_LOCATION))).toBe(
            'https://localhost:8080/hapica',
        );
    });

    it('has no items in ancestorOrigins', () => {
        const req: any = {
            url: '/hapica',
            socket: {},
            headers: {
                host: 'localhost:8080',
            },
        };

        TestBed.configureTestingModule({
            providers: [provideLocation(req as IncomingMessage)],
        });

        expect(String(TestBed.inject(SSR_LOCATION))).toBe('http://localhost:8080/hapica');
        expect(TestBed.inject(SSR_LOCATION).ancestorOrigins.contains('')).toBe(false);
        expect(TestBed.inject(SSR_LOCATION).ancestorOrigins.item(-1)).toBeNull();
    });
});

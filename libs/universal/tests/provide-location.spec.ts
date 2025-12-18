import {type IncomingMessage} from 'node:http';

import {TestBed} from '@angular/core/testing';
import {provideLocation, WA_SSR_LOCATION} from '@ng-web-apis/universal';

window.onbeforeunload = jasmine.createSpy();

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

        expect(String(TestBed.inject(WA_SSR_LOCATION))).toBe(
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

        expect(String(TestBed.inject(WA_SSR_LOCATION))).toBe(
            'http://localhost:8080/hapica',
        );
        expect(TestBed.inject(WA_SSR_LOCATION).ancestorOrigins.contains('')).toBe(false);
        expect(TestBed.inject(WA_SSR_LOCATION).ancestorOrigins.item(-1)).toBeNull();
    });
});

import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {GeolocationService} from '@ng-web-apis/geolocation';
import {catchError} from 'rxjs';

describe('Geolocation token', () => {
    let service: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GeolocationService],
        });

        service = TestBed.inject(GeolocationService).pipe(
            catchError((_err, caught) => caught),
        );
    });

    it('defined', () => {
        expect(service).toBeDefined();
    });
});

import {TestBed} from '@angular/core/testing';
import {catchError} from 'rxjs/operators';
import {GeolocationService} from '../src/services/geolocation.service';

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

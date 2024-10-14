import {TestBed} from '@angular/core/testing';
import {GeolocationService} from '@ng-web-apis/geolocation';
import {catchError} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

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

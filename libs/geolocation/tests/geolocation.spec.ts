import {TestBed} from '@angular/core/testing';
import {WaGeolocationService} from '@ng-web-apis/geolocation';
import {catchError} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('Geolocation token', () => {
    let service: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WaGeolocationService],
        });

        service = TestBed.inject(WaGeolocationService).pipe(
            catchError((_err, caught) => caught),
        );
    });

    it('defined', () => {
        expect(service).toBeDefined();
    });
});

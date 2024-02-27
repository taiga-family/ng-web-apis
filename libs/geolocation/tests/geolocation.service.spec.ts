import {TestBed} from '@angular/core/testing';
import {
    GEOLOCATION,
    GEOLOCATION_SUPPORT,
    GeolocationService,
} from '@ng-web-apis/geolocation';
import {catchError, EMPTY, interval, skip, take, timer} from 'rxjs';

describe('GeolocationService', () => {
    describe('Geolocation service', () => {
        let service: GeolocationService;
        let clearWatchCount: number;

        class FakeGeolocation {
            protected watchPosition(success: any, error: any): void {
                interval(300).subscribe(number => success(number.toString()));
                timer(1000)
                    .pipe(take(1))
                    .subscribe(() => error('error'));
            }

            protected clearWatch(): void {
                clearWatchCount++;
            }
        }

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {provide: GEOLOCATION, useClass: FakeGeolocation},
                    GeolocationService,
                ],
            });

            service = TestBed.inject(GeolocationService).pipe(
                catchError((_err, caught) => caught),
            );
            clearWatchCount = 0;
        });

        it('Gives a position', done => {
            service.pipe(take(1)).subscribe(position => {
                expect(position).toMatch('0');
                done();
            });
        });

        it('Provides position from cache if other subscriptions exist', done => {
            let firstPosition: GeolocationPosition;

            service.subscribe(position => {
                firstPosition = position;
            });

            service.pipe(skip(2), take(1)).subscribe(position => {
                expect(position).toEqual(firstPosition);
                done();
            });
        });

        it('clearWatch method is called once when all subscribers are unsubscribed.', done => {
            const firstSubscription = service.subscribe();

            const secondSubscription = service.subscribe();

            firstSubscription.unsubscribe();
            secondSubscription.unsubscribe();

            expect(clearWatchCount).toBe(1);
            done();
        });

        it('clearWatch method is not called if none of the subscribers unsubscribed', done => {
            service.subscribe();
            service.subscribe();

            expect(clearWatchCount).toBe(0);
            done();
        });

        it('Error', done => {
            service = TestBed.inject(GeolocationService);

            service
                .pipe(
                    catchError(error => {
                        expect(error).toBe('error');
                        done();

                        return EMPTY;
                    }),
                )
                .subscribe();
        });
    });

    describe('Geolocation Service if unsupported', () => {
        it('cannot recieve and throws an error if Geolocation is not supported', done => {
            TestBed.configureTestingModule({
                providers: [
                    {provide: GEOLOCATION_SUPPORT, useValue: false},
                    GeolocationService,
                ],
            });

            const service$: GeolocationService = TestBed.inject(GeolocationService);

            service$.subscribe(
                () => {},
                error => {
                    expect(error).toBe('Geolocation is not supported in your browser');
                    done();
                },
            );
        });
    });
});

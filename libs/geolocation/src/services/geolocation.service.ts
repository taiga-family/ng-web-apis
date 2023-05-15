import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {finalize, shareReplay} from 'rxjs/operators';
import {GEOLOCATION} from '../tokens/geolocation';
import {POSITION_OPTIONS} from '../tokens/geolocation-options';
import {GEOLOCATION_SUPPORT} from '../tokens/geolocation-support';

@Injectable({
    providedIn: 'root',
})
export class GeolocationService extends Observable<GeolocationPosition> {
    constructor(
        @Inject(GEOLOCATION) geolocationRef: Geolocation,
        @Inject(GEOLOCATION_SUPPORT) geolocationSupported: boolean,
        @Inject(POSITION_OPTIONS) positionOptions: PositionOptions,
    ) {
        let watchPositionId = 0;

        super(subscriber => {
            if (!geolocationSupported) {
                subscriber.error('Geolocation is not supported in your browser');
            }

            watchPositionId = geolocationRef.watchPosition(
                position => subscriber.next(position),
                positionError => subscriber.error(positionError),
                positionOptions,
            );
        });

        return this.pipe(
            finalize(() => geolocationRef.clearWatch(watchPositionId)),
            shareReplay({bufferSize: 1, refCount: true}),
        ) as GeolocationService;
    }
}

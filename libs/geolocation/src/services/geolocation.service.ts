import {inject, Injectable} from '@angular/core';
import {finalize, Observable, shareReplay} from 'rxjs';

import {GEOLOCATION} from '../tokens/geolocation';
import {POSITION_OPTIONS} from '../tokens/geolocation-options';
import {GEOLOCATION_SUPPORT} from '../tokens/geolocation-support';

@Injectable({
    providedIn: 'root',
})
export class GeolocationService extends Observable<GeolocationPosition> {
    constructor() {
        const geolocationRef = inject(GEOLOCATION);
        const geolocationSupported = inject(GEOLOCATION_SUPPORT);
        const positionOptions = inject(POSITION_OPTIONS);

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

import {NgZone} from '@angular/core';
import {MonoTypeOperatorFunction, Observable, pipe} from 'rxjs';

export function zonefree<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return source =>
        new Observable(subscriber =>
            zone.runOutsideAngular(() => source.subscribe(subscriber)),
        );
}

export function zonefull<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return source =>
        new Observable(subscriber =>
            source.subscribe({
                next: value => zone.run(() => subscriber.next(value)),
                error: (error: unknown) => zone.run(() => subscriber.error(error)),
                complete: () => zone.run(() => subscriber.complete()),
            }),
        );
}

export function zoneOptimized<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return pipe(zonefree(zone), zonefull(zone));
}

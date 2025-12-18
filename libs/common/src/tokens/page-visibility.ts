import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {
    distinctUntilChanged,
    fromEvent,
    map,
    type Observable,
    shareReplay,
    startWith,
} from 'rxjs';

export const WA_PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
    '[WA_PAGE_VISIBILITY]',
    {
        factory: () => {
            const documentRef = inject(DOCUMENT);

            return fromEvent(documentRef, 'visibilitychange').pipe(
                startWith(0),
                map(() => documentRef.visibilityState !== 'hidden'),
                distinctUntilChanged(),
                shareReplay({refCount: false, bufferSize: 1}),
            );
        },
    },
);

import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {distinctUntilChanged, map, shareReplay, startWith} from 'rxjs/operators';

export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
    'Shared Observable based on `document visibility changed`',
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

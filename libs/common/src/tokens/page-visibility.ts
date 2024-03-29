import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, fromEvent, map, shareReplay, startWith} from 'rxjs';

export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
    '[PAGE_VISIBILITY]: Shared Observable based on `document visibility changed`',
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

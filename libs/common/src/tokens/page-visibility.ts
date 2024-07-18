import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, fromEvent, map, shareReplay, startWith} from 'rxjs';

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

/**
 * @deprecated: drop in v5.0, use {@link WA_PAGE_VISIBILITY}
 */
export const PAGE_VISIBILITY = WA_PAGE_VISIBILITY;

import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {distinctUntilChanged, map, share, startWith} from 'rxjs/operators';

export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
    'Shared Observable based on `document visibility changed`',
    {
        factory: () => {
            const document = inject(DOCUMENT);

            return fromEvent(document, 'visibilitychange').pipe(
                startWith(true),
                map(() => !document.hidden),
                distinctUntilChanged(),
                share(),
            );
        },
    },
);

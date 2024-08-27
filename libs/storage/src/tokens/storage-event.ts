import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import type {Observable} from 'rxjs';
import {fromEvent} from 'rxjs';

export const WA_STORAGE_EVENT = new InjectionToken<Observable<StorageEvent>>(
    '[WA_STORAGE_EVENT]',
    {
        factory: () => fromEvent<StorageEvent>(inject(WA_WINDOW), 'storage'),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_STORAGE_EVENT}
 */
export const STORAGE_EVENT = WA_STORAGE_EVENT;

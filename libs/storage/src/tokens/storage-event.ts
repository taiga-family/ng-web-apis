import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import type {Observable} from 'rxjs';
import {fromEvent} from 'rxjs';

export const STORAGE_EVENT = new InjectionToken<Observable<StorageEvent>>(
    '[STORAGE_EVENT]: All changes to Storage objects',
    {
        factory: () => fromEvent<StorageEvent>(inject(WINDOW), 'storage'),
    },
);

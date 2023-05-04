import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {fromEvent, Observable} from 'rxjs';

export const STORAGE_EVENT = new InjectionToken<Observable<StorageEvent>>(
    'All changes to Storage objects',
    {
        factory: () => fromEvent<StorageEvent>(inject(WINDOW), 'storage'),
    },
);

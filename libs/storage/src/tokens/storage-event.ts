import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {fromEvent, type Observable} from 'rxjs';

export const WA_STORAGE_EVENT = new InjectionToken<Observable<StorageEvent>>(
    '[WA_STORAGE_EVENT]',
    {factory: () => fromEvent<StorageEvent>(inject(WA_WINDOW), 'storage')},
);

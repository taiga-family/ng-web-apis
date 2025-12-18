import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_LOCAL_STORAGE = new InjectionToken<Storage | null>('[WA_LOCAL_STORAGE]', {
    factory: () => inject(WA_WINDOW).localStorage,
});

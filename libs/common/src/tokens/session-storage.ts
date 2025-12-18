import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_SESSION_STORAGE = new InjectionToken<Storage | null>(
    '[WA_SESSION_STORAGE]',
    {factory: () => inject(WA_WINDOW).sessionStorage},
);

import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_CRYPTO = new InjectionToken<Crypto>('[WA_CRYPTO]', {
    factory: () => inject(WA_WINDOW).crypto,
});

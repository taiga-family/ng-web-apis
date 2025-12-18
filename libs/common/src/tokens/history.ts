import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_HISTORY = new InjectionToken<History>('[WA_HISTORY]', {
    factory: () => inject(WA_WINDOW).history,
});

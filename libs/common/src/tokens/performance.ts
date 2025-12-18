import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_PERFORMANCE = new InjectionToken<Performance>('[WA_PERFORMANCE]', {
    factory: () => inject(WA_WINDOW).performance,
});

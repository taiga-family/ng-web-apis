import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_LOCATION = new InjectionToken<Location>('[WA_LOCATION]', {
    factory: () => inject(WA_WINDOW).location,
});

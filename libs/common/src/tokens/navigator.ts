import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_NAVIGATOR = new InjectionToken<Navigator>('[WA_NAVIGATOR]', {
    factory: () => inject(WA_WINDOW).navigator,
});

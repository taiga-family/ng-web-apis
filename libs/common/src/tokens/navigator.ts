import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_NAVIGATOR = new InjectionToken<Navigator>('[WA_NAVIGATOR]', {
    factory: () => inject(WINDOW).navigator,
});

/**
 * @deprecated: drop in v5.0, use {@link WA_NAVIGATOR}
 */
export const NAVIGATOR = WA_NAVIGATOR;

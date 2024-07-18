import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const WA_SCREEN = new InjectionToken<Screen>('[WA_SCREEN]', {
    factory: () => inject(WINDOW).screen,
});

/**
 * @deprecated: drop in v5.0, use {@link WA_SCREEN}
 */
export const SCREEN = WA_SCREEN;

import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

export const WA_SCREEN = new InjectionToken<Screen>('[WA_SCREEN]', {
    factory: () => inject(WA_WINDOW).screen,
});

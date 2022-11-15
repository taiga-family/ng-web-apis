import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const SCREEN = new InjectionToken<Screen>(
    'An abstraction over window.screen object',
    {
        factory: () => inject(WINDOW).screen,
    },
);

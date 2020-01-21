import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from './window';

export const NAVIGATOR = new InjectionToken<Navigator>(
    'An abstraction over window.navigator object',
    {
        factory: () => inject(WINDOW).navigator,
    },
);

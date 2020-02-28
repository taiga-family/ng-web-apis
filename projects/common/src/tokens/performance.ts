import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from './window';

export const PERFORMANCE = new InjectionToken<Performance>(
    'An abstraction over window.performance object',
    {
        factory: () => inject(WINDOW).performance,
    },
);

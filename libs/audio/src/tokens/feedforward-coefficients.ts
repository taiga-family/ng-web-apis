import {InjectionToken} from '@angular/core';

export const WA_FEEDFORWARD_COEFFICIENTS = new InjectionToken<number[]>(
    ngDevMode ? '[WA_FEEDFORWARD_COEFFICIENTS]' : '',
);

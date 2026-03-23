import {InjectionToken} from '@angular/core';

export const WA_FEEDBACK_COEFFICIENTS = new InjectionToken<number[]>(
    ngDevMode ? '[WA_FEEDBACK_COEFFICIENTS]' : '',
);

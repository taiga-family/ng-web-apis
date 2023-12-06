import {InjectionToken} from '@angular/core';

export const FEEDBACK_COEFFICIENTS = new InjectionToken<number[]>(
    `[FEEDBACK_COEFFICIENTS]: A sequence of feedback coefficients for IIRFilterNode`,
);

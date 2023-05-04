import {InjectionToken} from '@angular/core';

export const FEEDFORWARD_COEFFICIENTS = new InjectionToken<number[]>(
    'A sequence of feedforward coefficients for IIRFilterNode',
);

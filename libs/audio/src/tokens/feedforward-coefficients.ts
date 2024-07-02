import {InjectionToken} from '@angular/core';

export const WA_FEEDFORWARD_COEFFICIENTS = new InjectionToken<number[]>(
    '[WA_FEEDFORWARD_COEFFICIENTS]: A sequence of feedforward coefficients for IIRFilterNode',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_FEEDFORWARD_COEFFICIENTS}
 */
export const FEEDFORWARD_COEFFICIENTS = WA_FEEDFORWARD_COEFFICIENTS;

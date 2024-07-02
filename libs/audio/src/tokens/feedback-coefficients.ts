import {InjectionToken} from '@angular/core';

export const WA_FEEDBACK_COEFFICIENTS = new InjectionToken<number[]>(
    '[WA_FEEDBACK_COEFFICIENTS]: A sequence of feedback coefficients for IIRFilterNode',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_FEEDBACK_COEFFICIENTS}
 */
export const FEEDBACK_COEFFICIENTS = WA_FEEDBACK_COEFFICIENTS;

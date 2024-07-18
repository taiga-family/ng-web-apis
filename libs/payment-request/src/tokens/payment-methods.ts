import {InjectionToken} from '@angular/core';

export const WA_PAYMENT_METHODS = new InjectionToken<PaymentMethodData[]>(
    '[WA_PAYMENT_METHODS]',
    {
        factory: () => [{supportedMethods: 'basic-card'}],
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_PAYMENT_METHODS}
 */
export const PAYMENT_METHODS = WA_PAYMENT_METHODS;

import {InjectionToken} from '@angular/core';

export const PAYMENT_METHODS = new InjectionToken<PaymentMethodData[]>(
    '[PAYMENT_METHODS]: The methods used by Request Payment API',
    {
        factory: () => [{supportedMethods: 'basic-card'}],
    },
);

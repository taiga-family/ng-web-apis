import {InjectionToken} from '@angular/core';

export const PAYMENT_OPTIONS = new InjectionToken<PaymentOptions>(
    'Additional data requests from payer',
    {
        factory: () => ({}),
    },
);

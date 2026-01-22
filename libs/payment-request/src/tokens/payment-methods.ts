import {InjectionToken} from '@angular/core';

export const WA_PAYMENT_METHODS = new InjectionToken<PaymentMethodData[]>(
    '[WA_PAYMENT_METHODS]',
    {factory: () => [{supportedMethods: 'basic-card'}]},
);

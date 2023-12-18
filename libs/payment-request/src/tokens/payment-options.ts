import {InjectionToken} from '@angular/core';

/**
 * @deprecated
 */
export interface PaymentOptions {
    requestBillingAddress?: boolean;
    requestPayerEmail?: boolean;
    requestPayerName?: boolean;
    requestPayerPhone?: boolean;
    requestShipping?: boolean;
    shippingType?: 'delivery' | 'pickup' | 'shipping';
}

/**
 * @deprecated
 */
export interface PaymentShippingOption {
    amount: PaymentCurrencyAmount;
    id: string;
    label: string;
    selected?: boolean;
}

/**
 * @deprecated
 */
export const PAYMENT_OPTIONS = new InjectionToken<PaymentOptions>(
    '[PAYMENT_OPTIONS]: Additional data requests from payer',
    {
        factory: () => ({}),
    },
);

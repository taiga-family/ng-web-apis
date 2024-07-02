import {InjectionToken} from '@angular/core';

export interface WaPaymentOptions {
    requestBillingAddress?: boolean;
    requestPayerEmail?: boolean;
    requestPayerName?: boolean;
    requestPayerPhone?: boolean;
    requestShipping?: boolean;
    shippingType?: 'delivery' | 'pickup' | 'shipping';
}

/**
 * @deprecated: drop in v5.0, use {@link WaPaymentOptions}
 */
export type PaymentOptions = WaPaymentOptions;

export interface WaPaymentShippingOption {
    amount: PaymentCurrencyAmount;
    id: string;
    label: string;
    selected?: boolean;
}

/**
 * @deprecated: drop in v5.0, use {@link WaPaymentShippingOption}
 */
export type PaymentShippingOption = WaPaymentShippingOption;

export const WA_PAYMENT_OPTIONS = new InjectionToken<WaPaymentOptions>(
    '[WA_PAYMENT_OPTIONS]: Additional data requests from payer',
    {
        factory: () => ({}),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_PAYMENT_OPTIONS}
 */
export const PAYMENT_OPTIONS = WA_PAYMENT_OPTIONS;

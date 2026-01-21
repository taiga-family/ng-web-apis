import {InjectionToken} from '@angular/core';

export interface WaPaymentOptions {
    requestBillingAddress?: boolean;
    requestPayerEmail?: boolean;
    requestPayerName?: boolean;
    requestPayerPhone?: boolean;
    requestShipping?: boolean;
    shippingType?: 'delivery' | 'pickup' | 'shipping';
}

export interface WaPaymentShippingOption {
    amount: PaymentCurrencyAmount;
    id: string;
    label: string;
    selected?: boolean;
}

export const WA_PAYMENT_OPTIONS = new InjectionToken<WaPaymentOptions>(
    '[WA_PAYMENT_OPTIONS]',
    {factory: () => ({})},
);

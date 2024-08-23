import { WA_WINDOW } from "@ng-web-apis/common";
import {inject, InjectionToken} from '@angular/core';

declare global {
    interface Window {
        PaymentRequest: PaymentRequest;
    }
}

export const WA_PAYMENT_REQUEST_SUPPORT = new InjectionToken<boolean>(
    '[WA_PAYMENT_REQUEST_SUPPORT]',
    {
        factory: () => !!inject(WA_WINDOW).PaymentRequest,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_PAYMENT_REQUEST_SUPPORT}
 */
export const PAYMENT_REQUEST_SUPPORT = WA_PAYMENT_REQUEST_SUPPORT;

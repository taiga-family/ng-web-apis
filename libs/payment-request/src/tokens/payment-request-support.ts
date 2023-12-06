import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

declare global {
    interface Window {
        PaymentRequest: PaymentRequest;
    }
}

export const PAYMENT_REQUEST_SUPPORT = new InjectionToken<boolean>(
    `[PAYMENT_REQUEST_SUPPORT]: Is Payment Request Api supported?`,
    {
        factory: () => !!inject(WINDOW).PaymentRequest,
    },
);

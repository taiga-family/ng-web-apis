import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

declare global {
    interface Window {
        PaymentRequest: PaymentRequest;
    }
}

export const WA_PAYMENT_REQUEST_SUPPORT = new InjectionToken<boolean>(
    '[WA_PAYMENT_REQUEST_SUPPORT]',
    {factory: () => !!inject(WA_WINDOW).PaymentRequest},
);

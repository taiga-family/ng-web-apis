import {inject, Injectable} from '@angular/core';

import {WA_PAYMENT_METHODS} from '../tokens/payment-methods';
import {WA_PAYMENT_OPTIONS, type WaPaymentOptions} from '../tokens/payment-options';
import {WA_PAYMENT_REQUEST_SUPPORT} from '../tokens/payment-request-support';

@Injectable({
    providedIn: 'root',
})
export class PaymentRequestService {
    private readonly supported = inject(WA_PAYMENT_REQUEST_SUPPORT);
    private readonly paymentMethods = inject(WA_PAYMENT_METHODS);
    private readonly paymentOptions = inject(WA_PAYMENT_OPTIONS);

    public async request(
        details: PaymentDetailsInit,
        methods: PaymentMethodData[] = this.paymentMethods,
        options: WaPaymentOptions = this.paymentOptions,
    ): Promise<PaymentResponse> {
        if (!this.supported) {
            return Promise.reject(
                new Error('Payment Request is not supported in your browser'),
            );
        }

        // eslint-disable-next-line compat/compat
        const gateway = new PaymentRequest(
            methods,
            details,
            // @ts-ignore
            options,
        );

        return gateway
            .canMakePayment()
            .then(async (canPay) =>
                canPay
                    ? gateway.show(details)
                    : Promise.reject(
                          new Error('Payment Request cannot make the payment'),
                      ),
            );
    }
}

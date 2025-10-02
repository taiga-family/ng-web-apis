import {inject, Injectable} from '@angular/core';

import {PAYMENT_METHODS} from '../tokens/payment-methods';
import {PAYMENT_OPTIONS, type PaymentOptions} from '../tokens/payment-options';
import {PAYMENT_REQUEST_SUPPORT} from '../tokens/payment-request-support';

@Injectable({
    providedIn: 'root',
})
export class PaymentRequestService {
    private readonly supported = inject(PAYMENT_REQUEST_SUPPORT);
    private readonly paymentMethods = inject(PAYMENT_METHODS);
    private readonly paymentOptions = inject(PAYMENT_OPTIONS);

    public async request(
        details: PaymentDetailsInit,
        methods: PaymentMethodData[] = this.paymentMethods,
        options: PaymentOptions = this.paymentOptions,
    ): Promise<PaymentResponse> {
        if (!this.supported) {
            return Promise.reject(
                new Error('Payment Request is not supported in your browser'),
            );
        }

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

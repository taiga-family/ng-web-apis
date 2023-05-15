import {Inject, Injectable} from '@angular/core';
import {PAYMENT_METHODS} from '../tokens/payment-methods';
import {PAYMENT_OPTIONS} from '../tokens/payment-options';
import {PAYMENT_REQUEST_SUPPORT} from '../tokens/payment-request-support';

@Injectable({
    providedIn: 'root',
})
export class PaymentRequestService {
    constructor(
        @Inject(PAYMENT_REQUEST_SUPPORT) private readonly supported: boolean,
        @Inject(PAYMENT_METHODS)
        private readonly paymentMethods: PaymentMethodData[],
        @Inject(PAYMENT_OPTIONS)
        private readonly paymentOptions: PaymentOptions,
    ) {}

    request(
        details: PaymentDetailsInit,
        methods: PaymentMethodData[] = this.paymentMethods,
        options: PaymentOptions = this.paymentOptions,
    ): Promise<PaymentResponse> {
        if (!this.supported) {
            return Promise.reject(
                new Error('Payment Request is not supported in your browser'),
            );
        }

        const gateway = new PaymentRequest(methods, details, options);

        return gateway
            .canMakePayment()
            .then(canPay =>
                canPay
                    ? gateway.show(details)
                    : Promise.reject(
                          new Error('Payment Request cannot make the payment'),
                      ),
            );
    }
}

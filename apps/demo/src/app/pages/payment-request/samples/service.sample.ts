export const SERVICE_SAMPLE = `import {PaymentRequestService} from '@ng-web-apis/payment-request';

// ...

constructor(private readonly paymentRequest: PaymentRequestService) {}

pay(details: PaymentDetailsInit) {
    this.paymentRequest.request(details).then(
        response => {
            response.complete();
        },
        error => {},
    );
}`;

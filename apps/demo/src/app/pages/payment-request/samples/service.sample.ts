export const SERVICE_SAMPLE = `import {WaPaymentRequestService} from '@ng-web-apis/payment-request';

// ...

private readonly paymentRequest = inject(WaPaymentRequestService)

pay(details: PaymentDetailsInit) {
    this.paymentRequest.request(details).then(
        response => {
            response.complete();
        },
        error => {},
    );
}`;

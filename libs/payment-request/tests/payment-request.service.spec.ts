import {TestBed} from '@angular/core/testing';
import {PAYMENT_REQUEST_SUPPORT} from '../src/tokens/payment-request-support';
import {PaymentRequestService} from '../src/services/payment-request.service';

const paymentDetails = {
    total: {
        label: 'Matreshka',
        amount: {
            currency: 'RUB',
            value: '140',
        },
    },
};

describe('Payment Request Service', () => {
    let service: PaymentRequestService;

    let canPay = false;
    let response: Partial<PaymentResponse> = {};

    class FakePaymentRequest {
        constructor(_methods?: PaymentMethodData[], _details?: PaymentDetailsInit) {}

        canMakePayment(): Promise<boolean> {
            return Promise.resolve(canPay);
        }

        show(): Promise<PaymentResponse> {
            return Promise.resolve(response) as Promise<PaymentResponse>;
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PaymentRequestService],
        });

        canPay = false;
        response = {
            details: '',
            methodName: '',
            payerEmail: '',
            requestId: '',
            complete: (_?: PaymentComplete) => Promise.resolve(),
            toJSON: () => '',
        } as Partial<PaymentResponse>;

        service = TestBed.inject(PaymentRequestService);
    });

    it('throws an error if Payment Request in cannot pay status', done => {
        (globalThis as any).PaymentRequest = FakePaymentRequest;

        const promise = service.request(paymentDetails);

        promise.then(
            () => {},
            error => {
                expect(error.message).toBe('Payment Request cannot make the payment');
                done();
            },
        );
    });

    it('returns response if Payment Request in can pay status', done => {
        canPay = true;

        (globalThis as any).PaymentRequest = FakePaymentRequest;

        const promise = service.request(paymentDetails);

        promise.then(result => {
            expect(result).toBe(response as PaymentResponse);
            done();
        });
    });
});

describe('Payment Request Service if unsupported', () => {
    it('cannot request and throws an error if Payment Request is not supported', done => {
        TestBed.configureTestingModule({
            providers: [
                {provide: PAYMENT_REQUEST_SUPPORT, useValue: false},
                PaymentRequestService,
            ],
        });

        const service: PaymentRequestService = TestBed.inject(PaymentRequestService);
        const promise = service.request(paymentDetails);

        promise.then(
            () => {},
            error => {
                expect(error.message).toBe(
                    'Payment Request is not supported in your browser',
                );
                done();
            },
        );
    });
});

import {Directive, ElementRef, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {catchError, filter, from, fromEvent, of, share, switchMap} from 'rxjs';

import {PaymentRequestService} from '../../services/payment-request.service';
import {WA_PAYMENT_METHODS} from '../../tokens/payment-methods';
import {WA_PAYMENT_OPTIONS} from '../../tokens/payment-options';
import {isError} from '../../utils/is-error';
import {WaPayment} from '../payment/payment.directive';

@Directive({
    selector: '[waPaymentSubmit]',
})
export class WaPaymentSubmit {
    private readonly paymentHost = inject(WaPayment);
    private readonly paymentRequest = inject(PaymentRequestService);
    private readonly nativeElement: HTMLElement = inject(ElementRef).nativeElement;
    private readonly methods = inject(WA_PAYMENT_METHODS);
    private readonly options = inject(WA_PAYMENT_OPTIONS);
    private readonly requests$ = fromEvent(this.nativeElement, 'click').pipe(
        switchMap(() =>
            from(
                this.paymentRequest.request(
                    {...this.paymentHost},
                    this.methods,
                    this.options,
                ),
            ).pipe(catchError((error) => of(error))),
        ),
        share(),
    );

    public readonly waPaymentSubmit = outputFromObservable(
        this.requests$.pipe(filter((response) => !isError(response))),
    );

    public readonly waPaymentError = outputFromObservable(
        this.requests$.pipe(filter(isError)),
    );
}

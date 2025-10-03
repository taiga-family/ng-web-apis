import {Directive, ElementRef, inject, Output} from '@angular/core';
import {
    catchError,
    filter,
    from,
    fromEvent,
    type Observable,
    of,
    share,
    switchMap,
} from 'rxjs';

import {PaymentRequestService} from '../../services/payment-request.service';
import {PAYMENT_METHODS} from '../../tokens/payment-methods';
import {PAYMENT_OPTIONS} from '../../tokens/payment-options';
import {isError} from '../../utils/is-error';
import {WaPayment} from '../payment/payment.directive';

@Directive({
    standalone: true,
    selector: '[waPaymentSubmit]',
})
export class WaPaymentSubmit {
    private readonly paymentHost = inject(WaPayment);
    private readonly paymentRequest = inject(PaymentRequestService);
    private readonly nativeElement: HTMLElement = inject(ElementRef).nativeElement;
    private readonly methods = inject(PAYMENT_METHODS);
    private readonly options = inject(PAYMENT_OPTIONS);

    @Output()
    public readonly waPaymentSubmit: Observable<PaymentResponse>;

    @Output()
    public readonly waPaymentError: Observable<DOMException | Error>;

    constructor() {
        const requests$ = fromEvent(this.nativeElement, 'click').pipe(
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

        this.waPaymentSubmit = requests$.pipe(filter((response) => !isError(response)));

        this.waPaymentError = requests$.pipe(filter(isError));
    }
}

/**
 * @deprecated: use {@link WaPaymentSubmit}
 */
export const PaymentSubmitDirective = WaPaymentSubmit;

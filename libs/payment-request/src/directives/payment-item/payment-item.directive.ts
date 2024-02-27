import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[waPaymentItem][paymentAmount][paymentLabel]',
})
export class PaymentItemDirective implements PaymentItem {
    @Input('paymentAmount')
    public amount!: PaymentCurrencyAmount;

    @Input('paymentLabel')
    public label!: string;

    @Input('paymentPending')
    public pending?: boolean;
}

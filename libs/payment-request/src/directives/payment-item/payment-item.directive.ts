import {Directive} from '@angular/core';

@Directive({
    selector: '[waPaymentItem][paymentAmount][paymentLabel]',
    inputs: ['amount: paymentAmount', 'label: paymentLabel', 'pending: paymentPending'],
})
export class WaPaymentItem implements PaymentItem {
    public amount!: PaymentCurrencyAmount;
    public label!: string;
    public pending?: boolean;
}

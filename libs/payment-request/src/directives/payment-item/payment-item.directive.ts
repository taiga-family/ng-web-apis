import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[waPaymentItem][paymentAmount][paymentLabel]',
})
export class WaPaymentItem implements PaymentItem {
    @Input('paymentAmount')
    public amount!: PaymentCurrencyAmount;

    @Input('paymentLabel')
    public label!: string;

    @Input('paymentPending')
    public pending?: boolean;
}

/**
 * @deprecated: use {@link WaPaymentItem}
 */
export const PaymentItemDirective = WaPaymentItem;

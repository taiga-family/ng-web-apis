import {Directive, effect, input} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[waPaymentItem][paymentAmount][paymentLabel]',
})
export class WaPaymentItem implements PaymentItem {
    protected readonly $ = effect(() => {
        this.amount = this.paymentAmount();
        this.label = this.paymentLabel();
        this.pending = this.paymentPending();
    });

    public readonly paymentAmount = input.required<PaymentCurrencyAmount>();
    public readonly paymentLabel = input.required<string>();
    public readonly paymentPending = input(false);

    public amount!: PaymentCurrencyAmount;
    public label!: string;
    public pending?: boolean;
}

/**
 * @deprecated: use {@link WaPaymentItem}
 */
export const PaymentItemDirective = WaPaymentItem;

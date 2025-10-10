import {contentChildren, Directive, effect, input} from '@angular/core';

import {type PaymentShippingOption} from '../../tokens/payment-options';
import {WaPaymentItem} from '../payment-item/payment-item.directive';

@Directive({
    standalone: true,
    selector: '[waPayment][paymentTotal]',
})
export class WaPayment implements PaymentDetailsInit {
    private readonly paymentItems = contentChildren<PaymentItem>(WaPaymentItem);

    protected readonly $ = effect(() => {
        this.displayItems = this.paymentItems() as PaymentItem[];
        this.total = this.paymentTotal();
        this.id = this.paymentId();
        this.modifiers = this.paymentModifiers();
        this.shippingOptions = this.paymentShippingOptions();
    });

    public readonly paymentTotal = input.required<PaymentItem>();
    public readonly paymentId = input<string>();
    public readonly paymentModifiers = input<PaymentDetailsModifier[]>();
    public readonly paymentShippingOptions = input<PaymentShippingOption[]>();

    public total!: PaymentItem;
    public id?: string;
    public modifiers?: PaymentDetailsModifier[];
    public shippingOptions?: PaymentShippingOption[];
    public displayItems?: PaymentItem[];
}

/**
 * @deprecated use {@link WaPayment}
 */
export const PaymentDirective = WaPayment;

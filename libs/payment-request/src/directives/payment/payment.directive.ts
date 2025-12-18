import {contentChildren, Directive, effect} from '@angular/core';

import {type WaPaymentShippingOption} from '../../tokens/payment-options';
import {WaPaymentItem} from '../payment-item/payment-item.directive';

@Directive({
    selector: '[waPayment][paymentTotal]',
    inputs: [
        'total: paymentTotal',
        'id: paymentId',
        'modifiers: paymentModifiers',
        'shippingOptions: paymentShippingOptions',
    ],
})
export class WaPayment implements PaymentDetailsInit {
    public total!: PaymentItem;
    public id?: string;
    public modifiers?: PaymentDetailsModifier[];
    public shippingOptions?: WaPaymentShippingOption[];
    public displayItems?: PaymentItem[];

    protected readonly paymentItems = contentChildren(WaPaymentItem);
    protected readonly sync = effect(() => {
        this.displayItems = [...this.paymentItems()];
    });
}

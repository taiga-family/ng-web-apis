import type {QueryList} from '@angular/core';
import {ContentChildren, Directive, Input} from '@angular/core';

import type {PaymentShippingOption} from '../../tokens/payment-options';
import {PaymentItemDirective} from '../payment-item/payment-item.directive';

@Directive({
    standalone: true,
    selector: '[waPayment][paymentTotal]',
})
export class PaymentDirective implements PaymentDetailsInit {
    @Input('paymentTotal')
    public total!: PaymentItem;

    @Input('paymentId')
    public id?: string;

    @Input('paymentModifiers')
    public modifiers?: PaymentDetailsModifier[];

    @Input('paymentShippingOptions')
    public shippingOptions?: PaymentShippingOption[];

    public displayItems?: PaymentItem[];

    @ContentChildren(PaymentItemDirective)
    protected set paymentItems(items: QueryList<PaymentItem>) {
        this.displayItems = items.toArray();
    }
}

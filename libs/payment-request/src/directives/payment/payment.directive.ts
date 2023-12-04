import {ContentChildren, Directive, Input, QueryList} from '@angular/core';
import {PaymentItemDirective} from '../payment-item/payment-item.directive';
import {PaymentShippingOption} from '../../tokens/payment-options';

@Directive({
    selector: '[waPayment][paymentTotal]',
})
export class PaymentDirective implements PaymentDetailsInit {
    @Input('paymentTotal')
    total!: PaymentItem;

    @Input('paymentId')
    id?: string;

    @Input('paymentModifiers')
    modifiers?: PaymentDetailsModifier[];

    @Input('paymentShippingOptions')
    shippingOptions?: PaymentShippingOption[];

    @ContentChildren(PaymentItemDirective)
    set paymentItems(items: QueryList<PaymentItem>) {
        this.displayItems = items.toArray();
    }

    displayItems?: PaymentItem[];
}

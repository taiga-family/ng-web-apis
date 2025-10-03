import {ContentChildren, Directive, Input, type QueryList} from '@angular/core';

import {type PaymentShippingOption} from '../../tokens/payment-options';
import {WaPaymentItem} from '../payment-item/payment-item.directive';

@Directive({
    standalone: true,
    selector: '[waPayment][paymentTotal]',
})
export class WaPayment implements PaymentDetailsInit {
    @Input('paymentTotal')
    public total!: PaymentItem;

    @Input('paymentId')
    public id?: string;

    @Input('paymentModifiers')
    public modifiers?: PaymentDetailsModifier[];

    @Input('paymentShippingOptions')
    public shippingOptions?: PaymentShippingOption[];

    public displayItems?: PaymentItem[];

    @ContentChildren(WaPaymentItem)
    protected set paymentItems(items: QueryList<PaymentItem>) {
        this.displayItems = items.toArray();
    }
}

/**
 * @deprecated use {@link WaPayment}
 */
export const PaymentDirective = WaPayment;

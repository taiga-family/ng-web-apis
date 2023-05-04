import {NgModule} from '@angular/core';
import {PaymentItemDirective} from './directives/payment-item/payment-item.directive';
import {PaymentSubmitDirective} from './directives/payment-submit/payment-submit.directive';
import {PaymentDirective} from './directives/payment/payment.directive';

@NgModule({
    declarations: [PaymentDirective, PaymentItemDirective, PaymentSubmitDirective],
    exports: [PaymentDirective, PaymentItemDirective, PaymentSubmitDirective],
})
export class PaymentRequestModule {}

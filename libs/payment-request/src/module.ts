import {NgModule} from '@angular/core';

import {PaymentDirective} from './directives/payment/payment.directive';
import {PaymentItemDirective} from './directives/payment-item/payment-item.directive';
import {PaymentSubmitDirective} from './directives/payment-submit/payment-submit.directive';

@NgModule({
    imports: [PaymentDirective, PaymentItemDirective, PaymentSubmitDirective],
    exports: [PaymentDirective, PaymentItemDirective, PaymentSubmitDirective],
})
export class PaymentRequestModule {}

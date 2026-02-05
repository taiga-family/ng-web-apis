import {WaPayment} from './directives/payment/payment.directive';
import {WaPaymentItem} from './directives/payment-item/payment-item.directive';
import {WaPaymentSubmit} from './directives/payment-submit/payment-submit.directive';

export const WaPaymentRequest = [WaPayment, WaPaymentItem, WaPaymentSubmit] as const;

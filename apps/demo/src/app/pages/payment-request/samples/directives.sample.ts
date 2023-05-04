export const DIRECTIVES_SAMPLE = `<div
  waPayment
  [paymentTotal]="total"
>
  <div
    waPaymentItem
    [paymentLabel]="label"
    [paymentAmount]="amount"
  >
    {{label}} ({{amount}})
  </div>
  <button
    (waPaymentSubmit)="onPayment($event)"
    (waPaymentError)="onError($event)"
  >
    Buy
  </button>
</div>`;

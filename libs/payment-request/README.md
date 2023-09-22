# ![ng-web-apis logo](https://raw.githubusercontent.com/taiga-family/ng-web-apis/main/libs/payment-request/logo.svg) Payment Request API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/payment-request.svg)](https://npmjs.com/package/@ng-web-apis/payment-request)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/payment-request)](https://bundlephobia.com/result?p=@ng-web-apis/payment-request)
[![codecov](https://codecov.io/github/taiga-family/ng-web-apis/graph/badge.svg?flag=payment-request)](https://codecov.io/github/taiga-family/ng-web-apis/tree/main/libs/payment-request)

Angular does not have any abstractions over
[Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API). This library provides you
two ways to use this API with Angular of 6+ version.

## Install

If you do not have [@ng-web-apis/common](https://github.com/taiga-family/ng-web-apis/tree/main/libs/common):

```bash
npm i @ng-web-apis/common
```

Now install the package:

```bash
npm i @ng-web-apis/payment-request
```

## How to use

As an Angular service:

```ts
import {PaymentRequestService} from '@ng-web-apis/payment-request';

...
constructor(private readonly paymentRequest: PaymentRequestService) {}

pay(details: PaymentDetailsInit) {
    this.paymentRequest.request(details).then(
        response => {
            response.complete();
        },
        error => {},
    );
}
```

As a set of directives:

```html
<div waPayment [paymentTotal]="total">
  <div *ngFor="let item of items" waPaymentItem [paymentLabel]="item.label" [paymentAmount]="item.amount">
    {{item.label}} ({{item.amount}})
  </div>
  <button (waPaymentSubmit)="onPaymentSubmit($event)" (waPaymentError)="onPaymentError($event)">Buy</button>
</div>
```

Do not forget to import PaymentRequestModule:

```ts
import {PaymentRequestModule} from '@ng-web-apis/payment-request';
...
@NgModule({
    ...
    imports: [
        ...
        PaymentRequestModule
    ]
})
export class YourModule {}
```

As a good example of usage you can take a look at
[a project live demo on CodeSandbox](https://codesandbox.io/s/github/ng-web-apis/payment-request/tree/master/projects/demo)

#### waPayment

waPayment directive defines a scope for a new payment and needs
[PaymentItem](https://www.w3.org/TR/payment-request/#paymentitem-dictionary) object with information about a label and a
total sum of the payment

How to use:

```html
<any-element waPayment [paymentTotal]="total">...</any-element>
```

It implements
[PaymentDetailsInit](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.paymentdetailsinit.html)

Required inputs:

- `paymentTotal` is a information about a label and a total sum of the payment as
  [PaymentItem](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.paymentitem.html)

Additional inputs:

- `paymentId` is an id of the payment as `string`

- `paymentModifiers` is an array of
  [PaymentDetailsModifier](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.paymentdetailsmodifier.html)

- `paymentShippingOptions` is a
  [PaymentShippingOption](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.paymentshippingoption.html)
  object for the payment.

#### waPaymentItem

Each item of the payment is a `waPaymentItem` directive. It is a declarative
[PaymentItem](https://www.w3.org/TR/payment-request/#paymentitem-dictionary) for your Payment

How to use:

```html
<any-element waPayment [paymentTotal]="total">
  <any-element *ngFor="let item of items" waPaymentItem [paymentLabel]="item.label" [paymentAmount]="item.amount">
    {{item.label}}
  </any-element>
</any-element>
```

It implements
[PaymentItem](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.paymentitem.html)

Required inputs:

- `paymentAmount` is a price of payment item in modal as
  [PaymentCurrencyAmount](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.paymentcurrencyamount.html)

- `paymentLabel` is a title of payment item in modal as `string`

Additional inputs:

- `paymentPending` is native property for PaymentItem as `boolean`

#### waPaymentSubmit

This directive starts a Payment Request modal in your browser that returns
[PaymentResponse](https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse) or an error

How to use:

```html
<any-element waPayment [paymentTotal]="total">
  ...
  <button (waPaymentSubmit)="onPayment($event)" (waPaymentError)="onPaymentError($event)">Buy</button>
</any-element>
```

Outputs:

- `waPaymentSubmit` emits [PaymentResponse](https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse) object to
  handle a payment request result

- `waPaymentError` emits an `Error` or `DOMException` with information about user's problem that did not allow payment
  to proceed

## Tokens

The library also provides some tokens to simplify working with Payment Request API:

- `PAYMENT_REQUEST_SUPPORT` returns `true` if user's browser supports Payment Request API

```ts
export class YourComponent {
    constructor(
        @Inject(PAYMENT_REQUEST_SUPPORT) private readonly canRequest: boolean
    ) {}
    ...
```

- You can provide `PAYMENT_METHODS` as an array of supported API methods. It uses `[{supportedMethods: 'basic-card'}]`
  by default

```ts
@Component({
    ...
    providers: [
        {
            provide: [PAYMENT_METHODS],
            useValue: [
                // a sample with Google Pay from https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial?hl=en
                {supportedMethods: 'https://google.com/pay', data: googlePaymentDataRequest},
                {supportedMethods: 'basic-card'}
            ]
        }
    ]
})
export class YourComponentThatMakesPaymentRequests {
    ...
}
```

- You can provide `PAYMENT_OPTIONS` as an object with info that you need about a payer. It uses `{}` by default

```ts
@Component({
    ...
    providers: [
        {
            provide: [PAYMENT_OPTIONS],
            useValue: {
                shippingType: 'express',
                requestPayerName: true,
                requestShipping: true,
                requestPayerEmail: true,
            }
        }
    ]
})
export class YourComponentThatMakesPaymentRequests {
    ...
}
```

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                12+                                                                                                |                                                                                          Disabled by default                                                                                          |                                                                                                61+                                                                                                 |                                                                                               11.1+                                                                                                |

## See also

All [@ng-web-apis](https://taiga-family.github.io/ng-web-apis/) for your apps

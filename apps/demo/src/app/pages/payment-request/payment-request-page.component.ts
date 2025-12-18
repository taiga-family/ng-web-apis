import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WA_PAYMENT_METHODS, WaPaymentRequest} from '@ng-web-apis/payment-request';
import {HighlightModule} from 'ngx-highlightjs';

import {DIRECTIVES_SAMPLE} from './samples/directives.sample';
import {SERVICE_SAMPLE} from './samples/service.sample';
import {Shop} from './shop/shop.component';

@Component({
    selector: 'payment-request-page',
    imports: [CommonModule, HighlightModule, Shop, WaPaymentRequest],
    templateUrl: './payment-request-page.component.html',
    styleUrl: './payment-request-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: WA_PAYMENT_METHODS,
            useValue: [
                {
                    // Apple Pay sample will start in Safari
                    supportedMethods: 'https://apple.com/apple-pay',
                    data: {
                        version: 3,
                        merchantIdentifier: 'merchant.com.example',
                        merchantCapabilities: [
                            'supports3DS',
                            'supportsCredit',
                            'supportsDebit',
                        ],
                        supportedNetworks: ['amex', 'discover', 'masterCard', 'visa'],
                        countryCode: 'US',
                    },
                },
                {supportedMethods: 'basic-card'},
            ],
        },
    ],
})
export default class PaymentRequestPage {
    protected readonly samples = {
        service: SERVICE_SAMPLE,
        directives: DIRECTIVES_SAMPLE,
    };
}

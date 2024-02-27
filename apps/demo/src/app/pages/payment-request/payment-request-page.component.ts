import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PAYMENT_METHODS, PaymentRequestModule} from '@ng-web-apis/payment-request';
import {HighlightModule} from 'ngx-highlightjs';

import {DIRECTIVES_SAMPLE} from './samples/directives.sample';
import {SERVICE_SAMPLE} from './samples/service.sample';
import {ShopComponent} from './shop/shop.component';

@Component({
    standalone: true,
    selector: 'payment-request-page',
    imports: [CommonModule, HighlightModule, PaymentRequestModule, ShopComponent],
    templateUrl: './payment-request-page.component.html',
    styleUrls: ['./payment-request-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: PAYMENT_METHODS,
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
export default class PaymentRequestPageComponent {
    protected readonly samples = {
        service: SERVICE_SAMPLE,
        directives: DIRECTIVES_SAMPLE,
    };
}

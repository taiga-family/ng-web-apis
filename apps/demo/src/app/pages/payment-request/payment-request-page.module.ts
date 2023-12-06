import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PaymentRequestModule} from '@ng-web-apis/payment-request';
import {HighlightModule} from 'ngx-highlightjs';

import {PaymentRequestPageComponent} from './payment-request-page.component';
import {ShopComponent} from './shop/shop.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        PaymentRequestModule,
        RouterModule.forChild([{path: ``, component: PaymentRequestPageComponent}]),
    ],
    declarations: [PaymentRequestPageComponent, ShopComponent],
})
export class PaymentRequestPageModule {}

import {NgModule} from '@angular/core';
import {PaymentRequestPageComponent} from './payment-request-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PaymentRequestModule} from '@ng-web-apis/payment-request';
import {HighlightModule} from 'ngx-highlightjs';
import {ShopComponent} from './shop/shop.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        PaymentRequestModule,
        RouterModule.forChild([{path: '', component: PaymentRequestPageComponent}]),
    ],
    declarations: [PaymentRequestPageComponent, ShopComponent],
})
export class PaymentRequestPageModule {}

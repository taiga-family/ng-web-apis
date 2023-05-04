import {NgModule} from '@angular/core';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {IntersectionObserverPageComponent} from './intersection-observer-page.component';

@NgModule({
    imports: [
        CommonModule,
        IntersectionObserverModule,
        RouterModule.forChild([{path: '', component: IntersectionObserverPageComponent}]),
    ],
    declarations: [IntersectionObserverPageComponent],
})
export class IntersectionObserverPageModule {}

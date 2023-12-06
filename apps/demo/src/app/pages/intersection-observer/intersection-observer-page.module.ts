import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';

import {IntersectionObserverPageComponent} from './intersection-observer-page.component';

@NgModule({
    imports: [
        CommonModule,
        IntersectionObserverModule,
        RouterModule.forChild([{path: ``, component: IntersectionObserverPageComponent}]),
    ],
    declarations: [IntersectionObserverPageComponent],
})
export class IntersectionObserverPageModule {}

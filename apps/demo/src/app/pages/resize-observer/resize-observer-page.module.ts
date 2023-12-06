import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';

import {ResizeObserverPageComponent} from './resize-observer-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ResizeObserverModule,
        RouterModule.forChild([{path: ``, component: ResizeObserverPageComponent}]),
    ],
    declarations: [ResizeObserverPageComponent],
})
export class ResizeObserverPageModule {}

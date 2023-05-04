import {NgModule} from '@angular/core';
import {ResizeObserverPageComponent} from './resize-observer-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ResizeObserverModule,
        RouterModule.forChild([{path: '', component: ResizeObserverPageComponent}]),
    ],
    declarations: [ResizeObserverPageComponent],
})
export class ResizeObserverPageModule {}

import {NgModule} from '@angular/core';
import {MutationObserverPageComponent} from './mutation-observer-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MutationObserverModule} from '@ng-web-apis/mutation-observer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MutationObserverModule,
        RouterModule.forChild([{path: '', component: MutationObserverPageComponent}]),
    ],
    declarations: [MutationObserverPageComponent],
})
export class MutationObserverPageModule {}

import {NgModule} from '@angular/core';
import {ViewTransitionPageComponent} from './view-transition-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HighlightModule} from 'ngx-highlightjs';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiLetModule} from '@taiga-ui/cdk';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        TuiLinkModule,
        TuiLetModule,
        RouterModule.forChild([{path: '', component: ViewTransitionPageComponent}]),
    ],
    declarations: [ViewTransitionPageComponent],
})
export class ViewTransitionPageModule {}

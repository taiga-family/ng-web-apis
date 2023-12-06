import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiLinkModule} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

import {ViewTransitionPageComponent} from './view-transition-page.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        TuiLinkModule,
        TuiLetModule,
        RouterModule.forChild([{path: ``, component: ViewTransitionPageComponent}]),
    ],
    declarations: [ViewTransitionPageComponent],
})
export class ViewTransitionPageModule {}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';

import {CommonPageComponent} from './common-page.component';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        RouterModule.forChild([{path: ``, component: CommonPageComponent}]),
    ],
    declarations: [CommonPageComponent],
})
export class CommonPageModule {}

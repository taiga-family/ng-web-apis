import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';

import {UniversalPageComponent} from './universal-page.component';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        RouterModule.forChild([{path: ``, component: UniversalPageComponent}]),
    ],
    declarations: [UniversalPageComponent],
})
export class UniversalPageModule {}

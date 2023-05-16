import {NgModule} from '@angular/core';
import {CommonPageComponent} from './common-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        RouterModule.forChild([{path: '', component: CommonPageComponent}]),
    ],
    declarations: [CommonPageComponent],
})
export class CommonPageModule {}

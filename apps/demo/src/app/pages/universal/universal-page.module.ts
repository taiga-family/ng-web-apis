import {NgModule} from '@angular/core';
import {UniversalPageComponent} from './universal-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        RouterModule.forChild([{path: '', component: UniversalPageComponent}]),
    ],
    declarations: [UniversalPageComponent],
})
export class UniversalPageModule {}

import {NgModule} from '@angular/core';
import {CommonPageComponent} from './common-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: CommonPageComponent}]),
    ],
    declarations: [CommonPageComponent],
})
export class CommonPageModule {}

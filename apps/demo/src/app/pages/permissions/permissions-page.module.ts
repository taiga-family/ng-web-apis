import {NgModule} from '@angular/core';
import {PermissionsPageComponent} from './permissions-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        RouterModule.forChild([{path: '', component: PermissionsPageComponent}]),
    ],
    declarations: [PermissionsPageComponent],
})
export class PermissionsPageModule {}

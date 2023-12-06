import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HighlightModule} from 'ngx-highlightjs';

import {PermissionsPageComponent} from './permissions-page.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        RouterModule.forChild([{path: ``, component: PermissionsPageComponent}]),
    ],
    declarations: [PermissionsPageComponent],
})
export class PermissionsPageModule {}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WorkerModule} from '@ng-web-apis/workers';
import {TuiButtonModule, TuiNotificationModule} from '@taiga-ui/core';

import {ClockComponent} from './clock.component';
import {WorkersPageComponent} from './workers-page.component';

@NgModule({
    imports: [
        CommonModule,
        WorkerModule,
        TuiButtonModule,
        TuiNotificationModule,
        RouterModule.forChild([{path: ``, component: WorkersPageComponent}]),
    ],
    declarations: [WorkersPageComponent, ClockComponent],
})
export class WorkersPageModule {}

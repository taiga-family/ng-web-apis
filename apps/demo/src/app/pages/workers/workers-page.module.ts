import {NgModule} from '@angular/core';
import {WorkersPageComponent} from './workers-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {WorkerModule} from '@ng-web-apis/workers';
import {TuiButtonModule, TuiNotificationModule} from '@taiga-ui/core';
import {ClockComponent} from './clock.component';

@NgModule({
    imports: [
        CommonModule,
        WorkerModule,
        TuiButtonModule,
        TuiNotificationModule,
        RouterModule.forChild([{path: '', component: WorkersPageComponent}]),
    ],
    declarations: [WorkersPageComponent, ClockComponent],
})
export class WorkersPageModule {}

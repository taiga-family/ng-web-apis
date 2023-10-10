import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiBadgeModule} from '@taiga-ui/kit';
import {NotificationPageExample1} from './examples/01-getting-permission';
import {NotificationPageExample2} from './examples/02-create-notification';
import {NotificationPageExample3} from './examples/03-close-notification';
import {NotificationPageExample4} from './examples/04-listen-notification-events';
import {NotificationPageComponent} from './notification-page.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiBadgeModule,
        TuiButtonModule,
        TuiNotificationModule,
        RouterModule.forChild([{path: '', component: NotificationPageComponent}]),
    ],
    declarations: [
        NotificationPageComponent,
        NotificationPageExample1,
        NotificationPageExample2,
        NotificationPageExample3,
        NotificationPageExample4,
    ],
})
export class NotificationPageModule {}

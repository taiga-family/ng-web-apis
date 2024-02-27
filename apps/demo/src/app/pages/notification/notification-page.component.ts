import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {PermissionsService} from '@ng-web-apis/permissions';
import {TuiAddonDocModule, TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiBadgeModule} from '@taiga-ui/kit';

import {NotificationPageExample1} from './examples/01-getting-permission';
import {NotificationPageExample2} from './examples/02-create-notification';
import {NotificationPageExample3} from './examples/03-close-notification';
import {NotificationPageExample4} from './examples/04-listen-notification-events';

@Component({
    standalone: true,
    selector: 'notification-page',
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiBadgeModule,
        TuiButtonModule,
        TuiNotificationModule,
        TuiLinkModule,
        NotificationPageExample1,
        NotificationPageExample2,
        NotificationPageExample3,
        NotificationPageExample4,
    ],
    templateUrl: './notification-page.template.html',
    styleUrls: ['./notification-page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotificationPageComponent {
    protected readonly notificationPermissionState$ =
        inject(PermissionsService).state('notifications');

    protected readonly deniedPermissionNotification =
        'You have denied notification permission. Please, change it in browser settings.';

    protected readonly gettingPermissionExample: TuiDocExample = {
        'index.ts': import('./examples/01-getting-permission/index.ts?raw'),
        'index.html': import('./examples/01-getting-permission/index.html?raw'),
    };

    protected readonly createNotificationExample: TuiDocExample = {
        'index.ts': import('./examples/02-create-notification/index.ts?raw'),
        'index.html': import('./examples/02-create-notification/index.html?raw'),
    };

    protected readonly closeNotificationExample: TuiDocExample = {
        'index.ts': import('./examples/03-close-notification/index.ts?raw'),
        'index.html': import('./examples/03-close-notification/index.html?raw'),
    };

    protected readonly listenNotificationEventsExample: TuiDocExample = {
        'index.ts': import('./examples/04-listen-notification-events/index.ts?raw'),
        'index.html': import('./examples/04-listen-notification-events/index.html?raw'),
    };
}

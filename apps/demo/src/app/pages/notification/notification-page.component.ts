import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WaPermissionsService} from '@ng-web-apis/permissions';
import {TuiAddonDoc, type TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

import {NotificationPageExample1} from './examples/01-getting-permission';
import {NotificationPageExample2} from './examples/02-create-notification';
import {NotificationPageExample3} from './examples/03-close-notification';
import {NotificationPageExample4} from './examples/04-listen-notification-events';

@Component({
    selector: 'notification-page',
    imports: [
        CommonModule,
        NotificationPageExample1,
        NotificationPageExample2,
        NotificationPageExample3,
        NotificationPageExample4,
        TuiAddonDoc,
        TuiLink,
        TuiNotification,
    ],
    templateUrl: './notification-page.template.html',
    styleUrl: './notification-page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotificationPage {
    protected readonly notificationPermissionState$ =
        inject(WaPermissionsService).state('notifications');

    protected readonly deniedPermissionNotification =
        'You have denied notification permission. Please, change it in browser settings.';

    protected readonly gettingPermissionExample: Record<string, TuiRawLoaderContent> = {
        'index.ts': import('./examples/01-getting-permission/index.ts?raw'),
        'index.html': import('./examples/01-getting-permission/index.html?raw'),
    };

    protected readonly createNotificationExample: Record<string, TuiRawLoaderContent> = {
        'index.ts': import('./examples/02-create-notification/index.ts?raw'),
        'index.html': import('./examples/02-create-notification/index.html?raw'),
    };

    protected readonly closeNotificationExample: Record<string, TuiRawLoaderContent> = {
        'index.ts': import('./examples/03-close-notification/index.ts?raw'),
        'index.html': import('./examples/03-close-notification/index.html?raw'),
    };

    protected readonly listenNotificationEventsExample: Record<
        string,
        TuiRawLoaderContent
    > = {
        'index.ts': import('./examples/04-listen-notification-events/index.ts?raw'),
        'index.html': import('./examples/04-listen-notification-events/index.html?raw'),
    };
}

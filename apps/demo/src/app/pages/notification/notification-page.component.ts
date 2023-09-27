import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'notification-page',
    templateUrl: './notification-page.template.html',
    styleUrls: ['./notification-page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageComponent {
    readonly gettingPermissionExample: TuiDocExample = {
        'index.ts': import('./examples/01-getting-permission/index.ts?raw'),
        'index.html': import('./examples/01-getting-permission/index.html?raw'),
    };

    readonly createNotificationExample: TuiDocExample = {
        'index.ts': import('./examples/02-create-notification/index.ts?raw'),
        'index.html': import('./examples/02-create-notification/index.html?raw'),
    };

    readonly closeNotificationExample: TuiDocExample = {
        'index.ts': import('./examples/03-close-notification/index.ts?raw'),
        'index.html': import('./examples/03-close-notification/index.html?raw'),
    };

    readonly listenNotificationEventsExample: TuiDocExample = {
        'index.ts': import('./examples/04-listen-notification-events/index.ts?raw'),
        'index.html': import('./examples/04-listen-notification-events/index.html?raw'),
    };
}

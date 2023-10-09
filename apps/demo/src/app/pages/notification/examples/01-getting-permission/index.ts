import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {PermissionsService} from '@ng-web-apis/permissions';

@Component({
    selector: 'notification-page-example-1',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample1 {
    readonly notificationPermissionState$ = this.permissions.state('notifications');

    constructor(
        private readonly notifications: NotificationService,
        private readonly permissions: PermissionsService,
    ) {}

    requestPermission(): void {
        this.notifications.requestPermission().subscribe({
            next: permission =>
                console.info(
                    'Permission status:',
                    permission, // 'denied' | 'granted'
                ),
            error: err =>
                // e.g. 'Notification API is not supported in your browser'
                console.error(err),
        });
    }
}

import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {PermissionsService} from '@ng-web-apis/permissions';
import {TuiBadgeModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'notification-page-example-1',
    imports: [CommonModule, TuiBadgeModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample1 {
    private readonly notifications: NotificationService = inject(NotificationService);

    protected readonly notificationPermissionState$ =
        inject(PermissionsService).state('notifications');

    protected requestPermission(): void {
        this.notifications.requestPermission().subscribe({
            next: (permission) =>
                console.info(
                    'Permission status:',
                    permission, // 'denied' | 'granted'
                ),
            error: (err) =>
                // e.g. 'Notification API is not supported in your browser'
                console.error(err),
        });
    }
}

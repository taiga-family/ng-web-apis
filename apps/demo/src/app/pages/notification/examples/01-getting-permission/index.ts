import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WaNotificationService} from '@ng-web-apis/notification';
import {WaPermissionsService} from '@ng-web-apis/permissions';
import {TuiButton} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    selector: 'notification-page-example-1',
    imports: [CommonModule, TuiBadge, TuiButton],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample1 {
    private readonly notifications: WaNotificationService = inject(WaNotificationService);

    protected readonly notificationPermissionState$ =
        inject(WaPermissionsService).state('notifications');

    protected requestPermission(): void {
        this.notifications.requestPermission().subscribe({
            next: (permission) =>
                console.info(
                    'Permission status:',
                    permission, // 'denied' | 'granted'
                ),
            error: (err: unknown) =>
                // e.g. 'Notification API is not supported in your browser'
                console.error(err),
        });
    }
}

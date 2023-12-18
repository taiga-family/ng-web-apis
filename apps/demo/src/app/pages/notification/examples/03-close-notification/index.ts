import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';
import {filter, map, switchMap, takeUntil, timer} from 'rxjs';

@Component({
    standalone: true,
    selector: 'notification-page-example-3',
    imports: [CommonModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample3 {
    private readonly notifications: NotificationService = inject(NotificationService);

    readonly denied$ = inject(PermissionsService)
        .state('notifications')
        .pipe(map(isDenied));

    sendNotification(): void {
        this.notifications
            .requestPermission()
            .pipe(
                filter(isGranted),
                switchMap(() =>
                    this.notifications.open('Close me, please!', {
                        requireInteraction: true,
                    }),
                ),
                takeUntil(timer(5_000)), // close stream after 5 seconds
            )
            .subscribe({
                complete: () => console.info('Notification closed!'),
            });
    }
}

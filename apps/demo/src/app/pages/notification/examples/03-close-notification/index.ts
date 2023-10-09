import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {PermissionsService} from '@ng-web-apis/permissions';
import {timer} from 'rxjs';
import {filter, map, switchMap, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'notification-page-example-3',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample3 {
    readonly denied$ = this.permissions
        .state('notifications')
        .pipe(map(state => state === 'denied'));

    constructor(
        private readonly notifications: NotificationService,
        private readonly permissions: PermissionsService,
    ) {}

    sendNotification(): void {
        this.notifications
            .requestPermission()
            .pipe(
                filter(permission => permission === 'granted'),
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

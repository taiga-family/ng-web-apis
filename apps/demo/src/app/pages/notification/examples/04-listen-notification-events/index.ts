import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {PermissionsService} from '@ng-web-apis/permissions';
import {fromEvent} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';

@Component({
    selector: 'notification-page-example-4',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample4 {
    readonly notificationPermissionState$ =
        this.permissionsService.state('notifications');

    constructor(
        private readonly notificationService: NotificationService,
        private readonly permissionsService: PermissionsService,
    ) {}

    sendNotification(): void {
        this.notificationService
            .requestPermission()
            .pipe(
                filter(permission => permission === 'granted'),
                switchMap(() =>
                    this.notificationService.open(`Click me, please`, {
                        body: `Then open console and investigate property "target"`,
                        requireInteraction: true,
                        data: `Randomly generate number: ${Math.random().toFixed(2)}`,
                    }),
                ),
                switchMap(notification => fromEvent(notification, 'click')),
            )
            .subscribe(console.info);
    }
}

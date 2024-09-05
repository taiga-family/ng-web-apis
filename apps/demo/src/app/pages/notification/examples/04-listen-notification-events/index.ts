import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';
import {TuiButton} from '@taiga-ui/core';
import {filter, fromEvent, map, switchMap} from 'rxjs';

@Component({
    standalone: true,
    selector: 'notification-page-example-4',
    imports: [CommonModule, TuiButton],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample4 {
    private readonly notifications: NotificationService = inject(NotificationService);

    protected readonly denied$ = inject(PermissionsService)
        .state('notifications')
        .pipe(map(isDenied));

    protected sendNotification(): void {
        this.notifications
            .requestPermission()
            .pipe(
                filter(isGranted),
                switchMap(() =>
                    this.notifications.open('Click me, please', {
                        body: 'Then open console and investigate property "target"',
                        requireInteraction: true,
                        data: `Randomly generated number: ${Math.random().toFixed(2)}`,
                    }),
                ),
                switchMap((notification) => fromEvent(notification, 'click')),
            )
            .subscribe(console.info);
    }
}

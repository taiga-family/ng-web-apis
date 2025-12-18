import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';
import {filter, map, switchMap} from 'rxjs';

@Component({
    selector: 'notification-page-example-2',
    imports: [CommonModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample2 {
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
                    this.notifications.open('Web APIs for Angular', {
                        body: 'High quality lightweight wrappers for native Web APIs for idiomatic use with Angular',
                        icon: 'assets/images/web-api.svg',
                    }),
                ),
            )
            .subscribe();
    }
}

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {PermissionsService} from '@ng-web-apis/permissions';
import {filter, switchMap} from 'rxjs/operators';

@Component({
    selector: 'notification-page-example-2',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample2 {
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
                    this.notificationService.open('Web APIs for Angular', {
                        body: 'High quality lightweight wrappers for native Web APIs for idiomatic use with Angular',
                        icon: 'assets/images/web-api.svg',
                    }),
                ),
            )
            .subscribe();
    }
}

import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';
import {filter, map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'notification-page-example-2',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample2 {
    readonly denied$ = this.permissions.state('notifications').pipe(map(isDenied));

    constructor(
        @Inject(NotificationService) private readonly notifications: NotificationService,
        @Inject(PermissionsService) private readonly permissions: PermissionsService,
    ) {}

    sendNotification(): void {
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

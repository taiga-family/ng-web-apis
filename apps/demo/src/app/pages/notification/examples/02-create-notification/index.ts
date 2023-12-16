import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';
import {TuiButtonModule} from '@taiga-ui/core';
import {filter, map, switchMap} from 'rxjs/operators';

@Component({
    standalone: true,
    selector: 'notification-page-example-2',
    imports: [AsyncPipe, TuiButtonModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample2 {
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
                    this.notifications.open('Web APIs for Angular', {
                        body: 'High quality lightweight wrappers for native Web APIs for idiomatic use with Angular',
                        icon: 'assets/images/web-api.svg',
                    }),
                ),
            )
            .subscribe();
    }
}

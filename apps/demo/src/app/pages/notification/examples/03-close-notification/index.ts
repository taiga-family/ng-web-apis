import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';
import {TuiButtonModule} from '@taiga-ui/core';
import {BehaviorSubject, timer} from 'rxjs';
import {filter, map, switchMap, takeUntil, tap} from 'rxjs/operators';

@Component({
    standalone: true,
    selector: 'notification-page-example-3',
    imports: [AsyncPipe, TuiButtonModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample3 {
    private readonly notifications: NotificationService = inject(NotificationService);
    readonly denied$ = inject(PermissionsService)
        .state('notifications')
        .pipe(map(isDenied));

    readonly showLoader$ = new BehaviorSubject(false);

    sendNotification(): void {
        this.notifications
            .requestPermission()
            .pipe(
                filter(isGranted),
                tap(() => this.showLoader$.next(true)),
                switchMap(() =>
                    this.notifications.open('Close me, please!', {
                        requireInteraction: true,
                    }),
                ),
                takeUntil(timer(5_000)), // close stream after 5 seconds
            )
            .subscribe({
                complete: () => {
                    this.showLoader$.next(false);
                    console.info('Notification closed!');
                },
            });
    }
}

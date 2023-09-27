import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {timer} from 'rxjs';
import {filter, switchMap, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'notification-page-example-3',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample3 {
    constructor(private readonly notificationService: NotificationService) {}

    sendNotification(): void {
        this.notificationService
            .requestPermission()
            .pipe(
                filter(permission => permission === 'granted'),
                switchMap(() =>
                    this.notificationService.open('Close me, please!', {
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

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {fromEvent} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';

@Component({
    selector: 'notification-page-example-4',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample4 {
    constructor(private readonly notificationService: NotificationService) {}

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

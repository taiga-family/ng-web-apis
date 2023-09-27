import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {filter, switchMap} from 'rxjs/operators';

@Component({
    selector: 'notification-page-example-2',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample2 {
    constructor(private readonly notificationService: NotificationService) {}

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

import {TestBed} from '@angular/core/testing';
import {NOTIFICATION_SUPPORT, NotificationService} from '@ng-web-apis/notification';
import {firstValueFrom} from 'rxjs';

describe('Notification API', () => {
    describe('if Notification API is not supported', () => {
        let service: NotificationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: NOTIFICATION_SUPPORT,
                        useValue: false,
                    },
                    NotificationService,
                ],
            });

            service = TestBed.inject(NotificationService);
        });

        it('method `requestPermission` (from `NotificationService`) returns Observable which fails with error', async () => {
            await expectAsync(
                firstValueFrom(service.requestPermission()),
            ).toBeRejectedWithError('Notification API is not supported in your browser');
        });

        it('method `open` (from `NotificationService`) returns Observable which fails with error', async () => {
            await expectAsync(
                firstValueFrom(service.open('Hello world')),
            ).toBeRejectedWithError('Notification API is not supported in your browser');
        });
    });

    describe('if Notification API is supported', () => {
        let notificationSupportToken: boolean;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [NotificationService],
            });

            notificationSupportToken = TestBed.inject(NOTIFICATION_SUPPORT);
        });

        it('token `NOTIFICATION_SUPPORT` returns true', () => {
            expect(notificationSupportToken).toBe(true);
        });

        it('method `requestPermission` (from `NotificationService`) returns `default` permission for the first time', () => {
            expect(Notification.permission).toBe('default');
        });
    });
});

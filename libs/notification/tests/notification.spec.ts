import {TestBed} from '@angular/core/testing';
import {WA_NOTIFICATION_SUPPORT, WaNotificationService} from '@ng-web-apis/notification';
import {firstValueFrom} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('Notification API', () => {
    describe('if Notification API is not supported', () => {
        let service: WaNotificationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: WA_NOTIFICATION_SUPPORT,
                        useValue: false,
                    },
                    WaNotificationService,
                ],
            });

            service = TestBed.inject(WaNotificationService);
        });

        it('method `requestPermission` (from `WaNotificationService`) returns Observable which fails with error', async () => {
            await expectAsync(
                firstValueFrom(service.requestPermission()),
            ).toBeRejectedWithError('Notification API is not supported in your browser');
        });

        it('method `open` (from `WaNotificationService`) returns Observable which fails with error', async () => {
            await expectAsync(
                firstValueFrom(service.open('Hello world')),
            ).toBeRejectedWithError('Notification API is not supported in your browser');
        });
    });

    describe('if Notification API is supported', () => {
        let notificationSupportToken: boolean;

        beforeEach(() => {
            TestBed.configureTestingModule({providers: [WaNotificationService]});

            notificationSupportToken = TestBed.inject(WA_NOTIFICATION_SUPPORT);
        });

        it('token `WA_NOTIFICATION_SUPPORT` returns true', () => {
            expect(notificationSupportToken).toBe(true);
        });

        it('method `requestPermission` (from `WaNotificationService`) returns `default` permission for the first time', () => {
            expect(Notification.permission).toBe('default');
        });
    });
});

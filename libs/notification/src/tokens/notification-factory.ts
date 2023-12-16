import {inject, InjectionToken} from '@angular/core';
import {SERVICE_WORKER} from '@ng-web-apis/common';

export const NOTIFICATION_FACTORY = new InjectionToken(
    `[NOTIFICATION_FACTORY]: An async function to create Notification using Notification API (with and without service worker)`,
    {
        factory: () => {
            const sw = inject(SERVICE_WORKER);

            return async (
                ...args: ConstructorParameters<typeof Notification>
            ): Promise<Notification> => {
                const registration = await sw.getRegistration();

                if (registration) {
                    await registration.showNotification(...args);

                    const notifications = await registration.getNotifications();

                    return notifications[notifications.length - 1];
                }

                return new Notification(...args);
            };
        },
    },
);

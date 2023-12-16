import {inject, NgZone, Provider, Type} from '@angular/core';
import type {SwPush} from '@angular/service-worker';
import {ANIMATION_FRAME, SERVICE_WORKER, zoneOptimized} from '@ng-web-apis/common';
import {combineLatest, filter, from, map, NEVER, pairwise, share, switchMap} from 'rxjs';

import {NOTIFICATION_SW_CLICKS} from '../tokens/notification-clicks';
import {NOTIFICATION_SW_CLOSES} from '../tokens/notification-closes';

export function provideSwPush(swPush: Type<SwPush>): Provider[] {
    return [
        {
            provide: NOTIFICATION_SW_CLICKS,
            deps: [swPush],
            useFactory: ({isEnabled, notificationClicks}: SwPush) =>
                isEnabled ? notificationClicks : NEVER,
        },
        {
            provide: NOTIFICATION_SW_CLOSES,
            /**
             * TODO: refactor the token's factory after this issue will be solved:
             * https://github.com/angular/angular/issues/52244
             * ```
             * {
             *    provide: NOTIFICATION_SW_CLOSES,
             *    useValue: swPush.isEnabled ? swPush.notificationCloses : NEVER,
             * },
             * ```
             */
            useFactory: () =>
                combineLatest([
                    from(inject(SERVICE_WORKER).getRegistration()),
                    inject(ANIMATION_FRAME),
                ]).pipe(
                    switchMap(([reg]) => (reg ? from(reg.getNotifications()) : NEVER)),
                    pairwise(),
                    filter(([prev, cur]) => prev.length > cur.length),
                    map(
                        ([prev, cur]) =>
                            prev.find((notification, i) => notification !== cur[i])!,
                    ),
                    zoneOptimized(inject(NgZone)),
                    share(),
                ),
        },
    ];
}

import {inject, InjectionToken} from '@angular/core';
import {Observable, share} from 'rxjs';

import {WINDOW} from './window';

export const WA_ANIMATION_FRAME = new InjectionToken<Observable<DOMHighResTimeStamp>>(
    '[WA_ANIMATION_FRAME]',
    {
        factory: () => {
            const {requestAnimationFrame, cancelAnimationFrame} = inject(WINDOW);
            const animationFrame$ = new Observable<DOMHighResTimeStamp>((subscriber) => {
                let id = NaN;
                const callback = (timestamp: DOMHighResTimeStamp): void => {
                    subscriber.next(timestamp);
                    id = requestAnimationFrame(callback);
                };

                id = requestAnimationFrame(callback);

                return () => {
                    cancelAnimationFrame(id);
                };
            });

            return animationFrame$.pipe(share());
        },
        providedIn: 'platform',
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_ANIMATION_FRAME}
 */
export const ANIMATION_FRAME = WA_ANIMATION_FRAME;

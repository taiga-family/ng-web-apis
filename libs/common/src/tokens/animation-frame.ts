import {inject, InjectionToken} from '@angular/core';
import {Observable, share} from 'rxjs';

import {WA_WINDOW} from './window';

export const WA_ANIMATION_FRAME = new InjectionToken<Observable<DOMHighResTimeStamp>>(
    '[WA_ANIMATION_FRAME]',
    {
        factory: () => {
            const {requestAnimationFrame, cancelAnimationFrame} = inject(WA_WINDOW);
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
    },
);

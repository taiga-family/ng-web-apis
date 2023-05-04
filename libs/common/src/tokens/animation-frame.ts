import {inject, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

import {WINDOW} from './window';

export const ANIMATION_FRAME = new InjectionToken<Observable<DOMHighResTimeStamp>>(
    'Shared Observable based on `window.requestAnimationFrame`',
    {
        factory: () => {
            const {requestAnimationFrame, cancelAnimationFrame} = inject(WINDOW);
            const animationFrame$ = new Observable<DOMHighResTimeStamp>(subscriber => {
                let id = NaN;
                const callback = (timestamp: DOMHighResTimeStamp) => {
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

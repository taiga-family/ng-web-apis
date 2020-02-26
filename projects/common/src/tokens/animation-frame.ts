import {inject, InjectionToken} from '@angular/core';
import {animationFrameScheduler, Observable, of} from 'rxjs';
import {map, repeat, share} from 'rxjs/operators';
import {PERFORMANCE} from './performance';

// interval has bug: https://github.com/ReactiveX/rxjs/issues/4972, scheduled only present in rxjs 6.5+
export const ANIMATION_FRAME = new InjectionToken<Observable<DOMHighResTimeStamp>>(
    'Shared Observable based on `window.requestAnimationFrame`',
    {
        factory: () => {
            const performanceRef = inject(PERFORMANCE);

            return of(0, animationFrameScheduler).pipe(
                repeat(),
                map(() => performanceRef.now()),
                share(),
            );
        },
    },
);

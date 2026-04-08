import {inject, InjectionToken, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {fromEvent, map} from 'rxjs';

export const WA_REDUCED_MOTION = new InjectionToken<Signal<boolean>>(
    ngDevMode ? '[WA_REDUCED_MOTION]' : '',
    {
        factory: () => {
            const media = inject(WA_WINDOW).matchMedia(
                '(prefers-reduced-motion: reduce)',
            );

            return toSignal(fromEvent(media, 'change').pipe(map(() => media.matches)), {
                initialValue: media.matches,
            });
        },
    },
);

export function waReducedMotion(): Signal<boolean> {
    return inject(WA_REDUCED_MOTION);
}

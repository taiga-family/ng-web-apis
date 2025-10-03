import {inject, InjectionToken, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {fromEvent, map} from 'rxjs';

export const WA_IS_TOUCH = new InjectionToken<Signal<boolean>>('', {
    factory: () => {
        const media = inject(WA_WINDOW).matchMedia('(pointer: coarse)');

        return toSignal(fromEvent(media, 'change').pipe(map(() => media.matches)), {
            initialValue: media.matches,
        });
    },
});

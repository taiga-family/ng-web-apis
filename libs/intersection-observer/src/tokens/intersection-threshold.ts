import {InjectionToken} from '@angular/core';

export const WA_INTERSECTION_THRESHOLD_DEFAULT = 0;
export const WA_INTERSECTION_THRESHOLD = new InjectionToken<number[] | number>(
    '[WA_INTERSECTION_THRESHOLD]',
    {
        providedIn: 'root',
        factory: () => WA_INTERSECTION_THRESHOLD_DEFAULT,
    },
);

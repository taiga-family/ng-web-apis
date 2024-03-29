import {InjectionToken} from '@angular/core';

export const INTERSECTION_THRESHOLD_DEFAULT = 0;
export const INTERSECTION_THRESHOLD = new InjectionToken<number[] | number>(
    '[INTERSECTION_THRESHOLD]: threshold for IntersectionObserver',
    {
        providedIn: 'root',
        factory: () => INTERSECTION_THRESHOLD_DEFAULT,
    },
);

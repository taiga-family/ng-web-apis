import {InjectionToken} from '@angular/core';

export const WA_INTERSECTION_THRESHOLD_DEFAULT = 0;
export const WA_INTERSECTION_THRESHOLD = new InjectionToken<number[] | number>(
    ngDevMode ? '[WA_INTERSECTION_THRESHOLD]' : '',
    {factory: () => WA_INTERSECTION_THRESHOLD_DEFAULT},
);

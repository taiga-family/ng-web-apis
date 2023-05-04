import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const INTERSECTION_OBSERVER_SUPPORT = new InjectionToken<boolean>(
    'Intersection Observer API support',
    {
        providedIn: 'root',
        factory: () => !!(inject(WINDOW) as any).IntersectionObserver,
    },
);

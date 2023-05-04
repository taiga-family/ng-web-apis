import {InjectionToken} from '@angular/core';

export const INTERSECTION_ROOT_MARGIN_DEFAULT = '0px 0px 0px 0px';
export const INTERSECTION_ROOT_MARGIN = new InjectionToken<string>(
    'rootMargin for IntersectionObserver',
    {
        providedIn: 'root',
        factory: () => INTERSECTION_ROOT_MARGIN_DEFAULT,
    },
);

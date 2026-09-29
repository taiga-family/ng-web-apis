import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

export const WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken<boolean>(
    ngDevMode ? '[WA_INTERSECTION_OBSERVER_SUPPORT]' : '',
    {factory: () => !!inject<any>(WA_WINDOW).IntersectionObserver},
);

export const WA_INTERSECTION_OBSERVER_V2_SUPPORT = new InjectionToken<boolean>(
    ngDevMode ? '[WA_INTERSECTION_OBSERVER_V2_SUPPORT]' : '',
    {
        factory: () =>
            'isVisible' in
            (inject<any>(WA_WINDOW).IntersectionObserverEntry?.prototype ?? {}),
    },
);

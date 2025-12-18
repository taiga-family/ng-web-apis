import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

export const WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken<boolean>(
    '[WA_INTERSECTION_OBSERVER_SUPPORT]: [WA_INTERSECTION_OBSERVER_SUPPORT]',
    {factory: () => !!(inject(WA_WINDOW) as any).IntersectionObserver},
);

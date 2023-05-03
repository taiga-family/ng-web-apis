import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const RESIZE_OBSERVER_SUPPORT = new InjectionToken<boolean>(
    'Resize Observer API support',
    {
        providedIn: 'root',
        factory: () => !!(inject(WINDOW) as any).ResizeObserver,
    },
);

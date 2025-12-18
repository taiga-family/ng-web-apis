import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

export const WA_RESIZE_OBSERVER_SUPPORT = new InjectionToken<boolean>(
    '[WA_RESIZE_OBSERVER_SUPPORT]',
    {factory: () => !!(inject(WA_WINDOW) as any).ResizeObserver},
);

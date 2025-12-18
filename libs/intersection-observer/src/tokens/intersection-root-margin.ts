import {InjectionToken} from '@angular/core';

export const WA_INTERSECTION_ROOT_MARGIN_DEFAULT = '0px 0px 0px 0px';
export const WA_INTERSECTION_ROOT_MARGIN = new InjectionToken<string>(
    '[WA_INTERSECTION_ROOT_MARGIN]',
    {
        providedIn: 'root',
        factory: () => WA_INTERSECTION_ROOT_MARGIN_DEFAULT,
    },
);

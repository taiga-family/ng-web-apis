import {InjectionToken} from '@angular/core';

export const WA_RESIZE_OPTION_BOX_DEFAULT: ResizeObserverBoxOptions = 'content-box';
export const WA_RESIZE_OPTION_BOX = new InjectionToken<ResizeObserverBoxOptions>(
    '[WA_RESIZE_OPTION_BOX]',
    {factory: () => WA_RESIZE_OPTION_BOX_DEFAULT},
);

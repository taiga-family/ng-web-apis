import {InjectionToken} from '@angular/core';

export const WA_RESIZE_OPTION_BOX_DEFAULT = 'content-box';

/**
 * @deprecated: drop in v5.0, use {@link WA_RESIZE_OPTION_BOX_DEFAULT}
 */
export const RESIZE_OPTION_BOX_DEFAULT = WA_RESIZE_OPTION_BOX_DEFAULT;

export const WA_RESIZE_OPTION_BOX = new InjectionToken<ResizeObserverBoxOptions>(
    '[WA_RESIZE_OPTION_BOX]: Box model to observe changes',
    {
        providedIn: 'root',
        factory: () => RESIZE_OPTION_BOX_DEFAULT,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_RESIZE_OPTION_BOX}
 */
export const RESIZE_OPTION_BOX = WA_RESIZE_OPTION_BOX;

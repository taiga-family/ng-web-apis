import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

declare global {
    interface Window {
        CSS: typeof CSS;
    }
}

const TOKEN_CSS = new InjectionToken<typeof CSS>(
    `[TOKEN_CSS]: An abstraction over window.CSS object`,
    {
        factory: () =>
            inject(WINDOW).CSS ??
            ({
                escape: v => v,
                // eslint-disable-next-line no-restricted-syntax
                supports: () => false,
            } satisfies typeof CSS),
    },
);

export {TOKEN_CSS as CSS};

import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

declare global {
    interface Window {
        CSS: typeof CSS;
    }
}

const TOKEN_CSS = new InjectionToken<typeof CSS>(
    'An abstraction over window.CSS object',
    {
        factory: () =>
            inject(WINDOW).CSS ??
            ({
                escape: v => v,
                supports: () => false,
            } as typeof CSS),
    },
);

export {TOKEN_CSS as CSS};

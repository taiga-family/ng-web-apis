import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

declare global {
    interface Window {
        CSS: typeof CSS;
    }
}

export const WA_CSS = new InjectionToken<typeof CSS>('[WA_CSS]', {
    factory: () =>
        inject(WINDOW).CSS ??
        ({
            escape: (v) => v,
            // eslint-disable-next-line no-restricted-syntax
            supports: () => false,
        } satisfies typeof CSS),
});

/**
 * @deprecated: drop in v5.0, use {@link WA_CSS}
 */
export const TOKEN_CSS = WA_CSS;

export {TOKEN_CSS as CSS};

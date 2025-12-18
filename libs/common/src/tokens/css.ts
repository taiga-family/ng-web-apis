import {inject, InjectionToken} from '@angular/core';

import {WA_WINDOW} from './window';

declare global {
    interface Window {
        CSS: typeof CSS | null;
    }
}

export const WA_CSS = new InjectionToken<typeof CSS>('[WA_CSS]', {
    factory: () =>
        inject(WA_WINDOW).CSS ??
        ({
            escape: (v: string) => v,
            supports: () => false,
        } as unknown as typeof CSS),
});

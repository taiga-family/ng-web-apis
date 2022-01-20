import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

/**
 * Use Window['CSS'], this is a workaround to support Angular 6+
 */
interface Css {
    escape(ident: string): string;
    supports(property: string, value: string): boolean;
    supports(conditionText: string): boolean;
}

export const CSS = new InjectionToken<Css>('An abstraction over window.CSS object', {
    factory: () =>
        (inject(WINDOW) as any).CSS || {
            escape: v => v,
            supports: () => false,
        },
});

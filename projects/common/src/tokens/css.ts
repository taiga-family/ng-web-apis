import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from './window';

declare global {
    interface Window {
        CSS: CSS;
    }
}

export const CSS = new InjectionToken<CSS>('An abstraction over window.CSS object', {
    factory: () => inject(WINDOW).CSS,
});

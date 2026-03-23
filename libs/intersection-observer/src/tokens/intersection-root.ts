import {type ElementRef, InjectionToken} from '@angular/core';

export const WA_INTERSECTION_ROOT = new InjectionToken<ElementRef<Element>>(
    ngDevMode ? '[WA_INTERSECTION_ROOT]' : '',
);

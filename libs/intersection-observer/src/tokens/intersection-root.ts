import {ElementRef, InjectionToken} from '@angular/core';

export const INTERSECTION_ROOT = new InjectionToken<ElementRef<Element>>(
    `[INTERSECTION_ROOT]: Root element for IntersectionObserver`,
);

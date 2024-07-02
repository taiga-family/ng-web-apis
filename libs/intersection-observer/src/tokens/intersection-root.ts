import type {ElementRef} from '@angular/core';
import {InjectionToken} from '@angular/core';

export const WA_INTERSECTION_ROOT = new InjectionToken<ElementRef<Element>>(
    '[WA_INTERSECTION_ROOT]: Root element for IntersectionObserver',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_INTERSECTION_ROOT}
 */
export const INTERSECTION_ROOT = WA_INTERSECTION_ROOT;

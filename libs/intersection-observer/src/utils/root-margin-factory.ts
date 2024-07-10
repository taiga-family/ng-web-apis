import {ElementRef, inject} from '@angular/core';

import {INTERSECTION_ROOT_MARGIN_DEFAULT} from '../tokens/intersection-root-margin';

export function rootMarginFactory(): string {
    return (
        inject(ElementRef).nativeElement.getAttribute('waIntersectionRootMargin') ||
        INTERSECTION_ROOT_MARGIN_DEFAULT
    );
}

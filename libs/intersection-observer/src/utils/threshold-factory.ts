import {ElementRef, inject} from '@angular/core';

import {INTERSECTION_THRESHOLD_DEFAULT} from '../tokens/intersection-threshold';

export function thresholdFactory(): number[] | number {
    return (
        inject(ElementRef)
            .nativeElement.getAttribute('waIntersectionThreshold')
            ?.split(',')
            .map(parseFloat) || INTERSECTION_THRESHOLD_DEFAULT
    );
}

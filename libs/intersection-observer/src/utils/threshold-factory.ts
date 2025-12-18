import {ElementRef, inject} from '@angular/core';

import {WA_INTERSECTION_THRESHOLD_DEFAULT} from '../tokens/intersection-threshold';

export function thresholdFactory(): number[] | number {
    return (
        inject(ElementRef)
            .nativeElement.getAttribute('waIntersectionThreshold')
            ?.split(',')
            .map(parseFloat) || WA_INTERSECTION_THRESHOLD_DEFAULT
    );
}

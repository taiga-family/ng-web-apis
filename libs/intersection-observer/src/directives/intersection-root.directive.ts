import {Directive, ElementRef} from '@angular/core';

import {INTERSECTION_ROOT} from '../tokens/intersection-root';

@Directive({
    standalone: true,
    selector: '[waIntersectionRoot]',
    providers: [
        {
            provide: INTERSECTION_ROOT,
            useExisting: ElementRef,
        },
    ],
})
export class WaIntersectionRoot {}

/**
 * @deprecated: use {@link WaIntersectionRoot}
 */
export const IntersectionRootDirective = WaIntersectionRoot;

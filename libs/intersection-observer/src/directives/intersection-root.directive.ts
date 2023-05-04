import {Directive, ElementRef} from '@angular/core';
import {INTERSECTION_ROOT} from '../tokens/intersection-root';

@Directive({
    selector: '[waIntersectionRoot]',
    providers: [
        {
            provide: INTERSECTION_ROOT,
            useExisting: ElementRef,
        },
    ],
})
export class IntersectionRootDirective {}

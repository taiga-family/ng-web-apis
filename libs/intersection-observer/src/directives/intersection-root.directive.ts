import {Directive, ElementRef} from '@angular/core';

import {WA_INTERSECTION_ROOT} from '../tokens/intersection-root';

@Directive({
    selector: '[waIntersectionRoot]',
    providers: [{provide: WA_INTERSECTION_ROOT, useExisting: ElementRef}],
})
export class WaIntersectionRoot {}

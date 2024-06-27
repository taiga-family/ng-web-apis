import {Directive, inject} from '@angular/core';

import {IntersectionObserveeService} from '../services/intersection-observee.service';

@Directive({
    standalone: true,
    selector: '[waIntersectionObservee]',
    outputs: ['waIntersectionObservee'],
    providers: [IntersectionObserveeService],
})
export class WaIntersectionObservee {
    protected readonly waIntersectionObservee = inject(IntersectionObserveeService);
}

/**
 * @deprecated: use {@link WaIntersectionObservee}
 */
export const IntersectionObserveeDirective = WaIntersectionObservee;

/**
 * @deprecated: use {@link WaIntersectionObservee}
 */
export const WaObservee = WaIntersectionObservee;

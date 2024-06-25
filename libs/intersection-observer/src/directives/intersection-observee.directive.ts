import {Directive, inject} from '@angular/core';

import {IntersectionObserveeService} from '../services/intersection-observee.service';

@Directive({
    standalone: true,
    selector: '[waIntersectionObservee]',
    outputs: ['waIntersectionObservee'],
    providers: [IntersectionObserveeService],
})
export class WaObservee {
    protected readonly waIntersectionObservee = inject(IntersectionObserveeService);
}

/**
 * @deprecated: use {@link WaObservee}
 */
export const IntersectionObserveeDirective = WaObservee;

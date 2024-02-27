import {Directive, inject} from '@angular/core';

import {IntersectionObserveeService} from '../services/intersection-observee.service';

@Directive({
    standalone: true,
    selector: '[waIntersectionObservee]',
    outputs: ['waIntersectionObservee'],
    providers: [IntersectionObserveeService],
})
export class IntersectionObserveeDirective {
    protected readonly waIntersectionObservee = inject(IntersectionObserveeService);
}

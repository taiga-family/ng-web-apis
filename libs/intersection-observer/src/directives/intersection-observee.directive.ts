import {Directive, Inject} from '@angular/core';
import {Observable} from 'rxjs';

import {IntersectionObserveeService} from '../services/intersection-observee.service';

@Directive({
    standalone: true,
    selector: '[waIntersectionObservee]',
    outputs: ['waIntersectionObservee'],
    providers: [IntersectionObserveeService],
})
export class IntersectionObserveeDirective {
    constructor(
        @Inject(IntersectionObserveeService)
        readonly waIntersectionObservee: Observable<IntersectionObserverEntry[]>,
    ) {}
}

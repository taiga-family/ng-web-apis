import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';

import {IntersectionObserveeService} from '../services/intersection-observee.service';

@Directive({
    selector: '[waIntersectionObservee]',
    providers: [IntersectionObserveeService],
})
export class WaIntersectionObservee {
    protected readonly waIntersectionObservee = outputFromObservable(
        inject(IntersectionObserveeService),
    );
}

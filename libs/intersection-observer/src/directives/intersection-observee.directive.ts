import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';

import {WaIntersectionObserveeService} from '../services/intersection-observee.service';

@Directive({
    selector: '[waIntersectionObservee]',
    providers: [WaIntersectionObserveeService],
})
export class WaIntersectionObservee {
    protected readonly waIntersectionObservee = outputFromObservable(
        inject(WaIntersectionObserveeService),
    );
}

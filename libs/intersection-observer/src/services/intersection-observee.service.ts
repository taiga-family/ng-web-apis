import {ElementRef, Inject, Injectable} from '@angular/core';
import {Observable, share} from 'rxjs';

import {IntersectionObserverDirective} from '../directives/intersection-observer.directive';

@Injectable()
export class IntersectionObserveeService extends Observable<IntersectionObserverEntry[]> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(IntersectionObserverDirective)
        observer: IntersectionObserverDirective,
    ) {
        super(subscriber => {
            observer.observe(nativeElement, entries => {
                subscriber.next(entries);
            });

            return () => {
                observer.unobserve(nativeElement);
            };
        });

        return this.pipe(share());
    }
}

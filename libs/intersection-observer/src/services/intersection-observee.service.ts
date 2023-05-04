import {ElementRef, Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';
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

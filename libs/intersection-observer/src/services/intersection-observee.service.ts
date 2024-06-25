import {ElementRef, inject, Injectable} from '@angular/core';
import {Observable, share} from 'rxjs';

import {WaObserver} from '../directives/intersection-observer.directive';

@Injectable()
export class IntersectionObserveeService extends Observable<IntersectionObserverEntry[]> {
    constructor() {
        const nativeElement: Element = inject(ElementRef).nativeElement;
        const observer = inject(WaObserver);

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

import {ElementRef, Inject, Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs';

import {SafeObserver} from '../classes/safe-observer';
import {INTERSECTION_ROOT} from '../tokens/intersection-root';
import {INTERSECTION_ROOT_MARGIN} from '../tokens/intersection-root-margin';
import {INTERSECTION_THRESHOLD} from '../tokens/intersection-threshold';

@Injectable()
export class IntersectionObserverService extends Observable<IntersectionObserverEntry[]> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(INTERSECTION_ROOT_MARGIN) rootMargin: string,
        @Inject(INTERSECTION_THRESHOLD) threshold: number[] | number,
        @Optional() @Inject(INTERSECTION_ROOT) root: ElementRef<Element> | null,
    ) {
        super(subscriber => {
            const observer = new SafeObserver(
                entries => {
                    subscriber.next(entries);
                },
                {
                    root: root?.nativeElement,
                    rootMargin,
                    threshold,
                },
            );

            observer.observe(nativeElement);

            return () => {
                observer.disconnect();
            };
        });
    }
}

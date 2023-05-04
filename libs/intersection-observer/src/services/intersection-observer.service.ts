import {ElementRef, Inject, Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';
import {INTERSECTION_ROOT} from '../tokens/intersection-root';
import {INTERSECTION_ROOT_MARGIN} from '../tokens/intersection-root-margin';
import {INTERSECTION_THRESHOLD} from '../tokens/intersection-threshold';
import {INTERSECTION_OBSERVER_SUPPORT} from '../tokens/support';

@Injectable()
export class IntersectionObserverService extends Observable<IntersectionObserverEntry[]> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(INTERSECTION_OBSERVER_SUPPORT) support: boolean,
        @Inject(INTERSECTION_ROOT_MARGIN) rootMargin: string,
        @Inject(INTERSECTION_THRESHOLD) threshold: number | number[],
        @Optional() @Inject(INTERSECTION_ROOT) root: ElementRef<Element> | null,
    ) {
        super(subscriber => {
            if (!support) {
                subscriber.error('IntersectionObserver is not supported in your browser');

                return;
            }

            const observer = new IntersectionObserver(
                entries => {
                    subscriber.next(entries);
                },
                {
                    root: root && root.nativeElement,
                    rootMargin,
                    threshold,
                },
            );

            observer.observe(nativeElement);

            return () => {
                observer.disconnect();
            };
        });

        return this.pipe(share());
    }
}

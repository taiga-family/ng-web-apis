import {ElementRef, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {SafeObserver} from '../classes/safe-observer';
import {INTERSECTION_ROOT} from '../tokens/intersection-root';
import {INTERSECTION_ROOT_MARGIN} from '../tokens/intersection-root-margin';
import {INTERSECTION_THRESHOLD} from '../tokens/intersection-threshold';

@Injectable()
export class IntersectionObserverService extends Observable<IntersectionObserverEntry[]> {
    private readonly nativeElement: Element = inject(ElementRef).nativeElement;
    private readonly rootMargin = inject(INTERSECTION_ROOT_MARGIN);
    private readonly threshold = inject(INTERSECTION_THRESHOLD);
    private readonly root: Element | null =
        inject(INTERSECTION_ROOT, {optional: true})?.nativeElement ?? null;

    constructor() {
        super(subscriber => {
            const observer = new SafeObserver(
                entries => {
                    subscriber.next(entries);
                },
                {
                    root: this.root,
                    rootMargin: this.rootMargin,
                    threshold: this.threshold,
                },
            );

            observer.observe(this.nativeElement);

            return () => {
                observer.disconnect();
            };
        });
    }
}

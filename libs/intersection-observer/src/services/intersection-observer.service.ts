import {ElementRef, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {SafeObserver} from '../classes/safe-observer';
import {WA_INTERSECTION_ROOT} from '../tokens/intersection-root';
import {WA_INTERSECTION_ROOT_MARGIN} from '../tokens/intersection-root-margin';
import {WA_INTERSECTION_THRESHOLD} from '../tokens/intersection-threshold';

@Injectable()
export class WaIntersectionObserverService extends Observable<
    IntersectionObserverEntry[]
> {
    private readonly nativeElement: Element = inject(ElementRef).nativeElement;
    private readonly rootMargin = inject(WA_INTERSECTION_ROOT_MARGIN);
    private readonly threshold = inject(WA_INTERSECTION_THRESHOLD);
    private readonly root: Element | null =
        inject(WA_INTERSECTION_ROOT, {optional: true})?.nativeElement ?? null;

    constructor() {
        super((subscriber) => {
            const observer = new SafeObserver(
                (entries) => {
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

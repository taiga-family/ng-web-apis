/* eslint-disable @angular-eslint/no-attribute-decorator */
import {Attribute, Directive, ElementRef, inject, OnDestroy} from '@angular/core';

import {SafeObserver} from '../classes/safe-observer';
import {INTERSECTION_ROOT} from '../tokens/intersection-root';
import {rootMarginFactory} from '../utils/root-margin-factory';
import {thresholdFactory} from '../utils/threshold-factory';

@Directive({
    standalone: true,
    selector: '[waIntersectionObserver]',
    exportAs: 'IntersectionObserver',
})
export class IntersectionObserverDirective extends SafeObserver implements OnDestroy {
    private readonly callbacks = new Map<Element, IntersectionObserverCallback>();

    constructor(
        @Attribute('waIntersectionRootMargin') rootMargin: string | null,
        @Attribute('waIntersectionThreshold') threshold: string | null,
    ) {
        const root = inject<ElementRef<Element>>(INTERSECTION_ROOT, {optional: true});

        super(
            entries => {
                this.callbacks.forEach((callback, element) => {
                    const filtered = entries.filter(({target}) => target === element);

                    return filtered.length && callback(filtered, this);
                });
            },
            {
                root: root?.nativeElement,
                rootMargin: rootMarginFactory(rootMargin),
                threshold: thresholdFactory(threshold),
            },
        );
    }

    public override observe(
        target: Element,
        callback: IntersectionObserverCallback = () => {},
    ): void {
        super.observe(target);
        this.callbacks.set(target, callback);
    }

    public override unobserve(target: Element): void {
        super.unobserve(target);
        this.callbacks.delete(target);
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}

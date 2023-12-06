/* eslint-disable @angular-eslint/no-attribute-decorator */
import {
    Attribute,
    Directive,
    ElementRef,
    Inject,
    OnDestroy,
    Optional,
} from '@angular/core';

import {INTERSECTION_ROOT} from '../tokens/intersection-root';
import {rootMarginFactory} from '../utils/root-margin-factory';
import {thresholdFactory} from '../utils/threshold-factory';

@Directive({
    selector: '[waIntersectionObserver]',
    exportAs: 'IntersectionObserver',
})
export class IntersectionObserverDirective
    extends IntersectionObserver
    implements OnDestroy
{
    private readonly callbacks = new Map<Element, IntersectionObserverCallback>();

    constructor(
        @Optional() @Inject(INTERSECTION_ROOT) root: ElementRef<Element> | null,
        @Attribute('waIntersectionRootMargin') rootMargin: string | null,
        @Attribute('waIntersectionThreshold') threshold: string | null,
    ) {
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

    override observe(
        target: Element,
        callback: IntersectionObserverCallback = () => {},
    ): void {
        super.observe(target);
        this.callbacks.set(target, callback);
    }

    override unobserve(target: Element): void {
        super.unobserve(target);
        this.callbacks.delete(target);
    }

    ngOnDestroy(): void {
        this.disconnect();
    }
}

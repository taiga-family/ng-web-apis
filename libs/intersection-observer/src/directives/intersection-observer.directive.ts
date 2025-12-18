import {Directive, inject, type OnDestroy} from '@angular/core';

import {SafeObserver} from '../classes/safe-observer';
import {WA_INTERSECTION_ROOT} from '../tokens/intersection-root';
import {rootMarginFactory} from '../utils/root-margin-factory';
import {thresholdFactory} from '../utils/threshold-factory';

@Directive({
    selector: '[waIntersectionObserver]',
    inputs: ['margin: waIntersectionRootMargin', 'threshold: waIntersectionThreshold'],
    exportAs: 'IntersectionObserver',
})
export class WaIntersectionObserverDirective extends SafeObserver implements OnDestroy {
    private readonly callbacks = new Map<Element, IntersectionObserverCallback>();

    public margin = '';
    public threshold = '';

    constructor() {
        const root = inject(WA_INTERSECTION_ROOT, {optional: true});

        super(
            (entries) => {
                this.callbacks.forEach((callback, element) => {
                    const filtered = entries.filter(({target}) => target === element);

                    return filtered.length && callback(filtered, this);
                });
            },
            {
                root: root?.nativeElement,
                rootMargin: rootMarginFactory(),
                threshold: thresholdFactory(),
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

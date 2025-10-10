import {
    Directive,
    ElementRef,
    inject,
    input,
    type OnDestroy,
    output,
} from '@angular/core';

import {SafeObserver} from '../classes/safe-observer';
import {MUTATION_OBSERVER_INIT} from '../tokens/mutation-observer-init';
import {mutationObserverInitFactory} from '../utils/mutation-observer-init-factory';

@Directive({
    standalone: true,
    selector: '[waMutationObserver]',
    providers: [
        {
            provide: MUTATION_OBSERVER_INIT,
            useFactory: mutationObserverInitFactory,
        },
    ],
    exportAs: 'MutationObserver',
})
export class WaMutationObserver extends SafeObserver implements OnDestroy {
    private readonly nativeElement: Node = inject(ElementRef).nativeElement;
    private readonly config = inject(MUTATION_OBSERVER_INIT);

    public readonly attributeFilter = input('');
    public readonly attributeOldValue = input('' as const);
    public readonly attributes = input('' as const);
    public readonly characterData = input('' as const);
    public readonly characterDataOldValue = input('' as const);
    public readonly childList = input('' as const);
    public readonly subtree = input('' as const);
    public readonly waMutationObserver = output<MutationRecord[]>();

    constructor() {
        super((records) => {
            this.waMutationObserver.emit(records);
        });

        this.observe(this.nativeElement, this.config);
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}

/**
 * @deprecated: use {@link WaMutationObserver}
 */
export const MutationObserverDirective = WaMutationObserver;

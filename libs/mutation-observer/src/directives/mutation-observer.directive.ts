import {Directive, ElementRef, inject, type OnDestroy, output} from '@angular/core';

import {SafeObserver} from '../classes/safe-observer';
import {WA_MUTATION_OBSERVER_INIT} from '../tokens/mutation-observer-init';
import {mutationObserverInitFactory} from '../utils/mutation-observer-init-factory';

@Directive({
    selector: '[waMutationObserver]',
    inputs: [
        'attributeFilter',
        'attributeOldValue',
        'attributes',
        'characterData',
        'characterDataOldValue',
        'childList',
        'subtree',
    ],
    providers: [
        {provide: WA_MUTATION_OBSERVER_INIT, useFactory: mutationObserverInitFactory},
    ],
    exportAs: 'MutationObserver',
})
export class WaMutationObserver extends SafeObserver implements OnDestroy {
    private readonly nativeElement: Node = inject(ElementRef).nativeElement;
    private readonly config = inject(WA_MUTATION_OBSERVER_INIT);

    public attributeFilter = '';
    public attributeOldValue = '' as const;
    public attributes = '' as const;
    public characterData = '' as const;
    public characterDataOldValue = '' as const;
    public childList = '' as const;
    public subtree = '' as const;

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

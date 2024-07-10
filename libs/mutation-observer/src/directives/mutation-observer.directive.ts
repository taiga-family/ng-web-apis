/* eslint-disable @angular-eslint/no-attribute-decorator */
import type {OnDestroy} from '@angular/core';
import {Directive, ElementRef, EventEmitter, inject, Input, Output} from '@angular/core';

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

    @Input()
    public attributeFilter = '';

    @Input()
    public attributeOldValue = '' as const;

    @Input()
    public attributes = '' as const;

    @Input()
    public characterData = '' as const;

    @Input()
    public characterDataOldValue = '' as const;

    @Input()
    public childList = '' as const;

    @Input()
    public subtree = '' as const;

    @Output()
    public readonly waMutationObserver = new EventEmitter<MutationRecord[]>();

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

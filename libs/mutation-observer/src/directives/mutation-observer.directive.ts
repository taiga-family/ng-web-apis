/* eslint-disable @angular-eslint/no-attribute-decorator */
import type {OnDestroy} from '@angular/core';
import {
    Attribute,
    Directive,
    ElementRef,
    EventEmitter,
    inject,
    Output,
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
            deps: [ElementRef],
            useFactory: mutationObserverInitFactory,
        },
    ],
    exportAs: 'MutationObserver',
})
export class WaMutationObserver extends SafeObserver implements OnDestroy {
    private readonly nativeElement: Node = inject(ElementRef).nativeElement;
    private readonly config = inject(MUTATION_OBSERVER_INIT);

    @Output()
    public readonly waMutationObserver = new EventEmitter<MutationRecord[]>();

    constructor(
        @Attribute('attributeFilter') _1: unknown,
        @Attribute('attributeOldValue') _2: unknown,
        @Attribute('attributes') _3: unknown,
        @Attribute('characterData') _4: unknown,
        @Attribute('characterDataOldValue') _5: unknown,
        @Attribute('childList') _6: unknown,
        @Attribute('subtree') _7: unknown,
    ) {
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

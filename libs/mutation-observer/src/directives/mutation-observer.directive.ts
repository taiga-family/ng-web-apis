/* eslint-disable @angular-eslint/no-attribute-decorator */
import {
    Attribute,
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    OnDestroy,
    Output,
} from '@angular/core';

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
export class MutationObserverDirective extends MutationObserver implements OnDestroy {
    @Output()
    readonly waMutationObserver = new EventEmitter<MutationRecord[]>();

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Node>,
        @Inject(MUTATION_OBSERVER_INIT) config: MutationObserverInit,
        @Attribute('attributeFilter') _1: unknown,
        @Attribute('attributeOldValue') _2: unknown,
        @Attribute('attributes') _3: unknown,
        @Attribute('characterData') _4: unknown,
        @Attribute('characterDataOldValue') _5: unknown,
        @Attribute('childList') _6: unknown,
        @Attribute('subtree') _7: unknown,
    ) {
        super(records => {
            this.waMutationObserver.emit(records);
        });

        this.observe(nativeElement, config);
    }

    ngOnDestroy(): void {
        this.disconnect();
    }
}

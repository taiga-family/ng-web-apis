import {ElementRef, inject} from '@angular/core';

import {booleanAttribute} from './boolean-attribute';

export function mutationObserverInitFactory(): MutationObserverInit {
    const {nativeElement} = inject(ElementRef);
    const attributeFilter: string | null = nativeElement.getAttribute('attributeFilter');

    return {
        attributeFilter: attributeFilter?.split(',').map((attr) => attr.trim()),
        attributeOldValue: booleanAttribute(nativeElement, 'attributeOldValue'),
        attributes: booleanAttribute(nativeElement, 'attributes'),
        characterData: booleanAttribute(nativeElement, 'characterData'),
        characterDataOldValue: booleanAttribute(nativeElement, 'characterDataOldValue'),
        childList: booleanAttribute(nativeElement, 'childList'),
        subtree: booleanAttribute(nativeElement, 'subtree'),
    };
}

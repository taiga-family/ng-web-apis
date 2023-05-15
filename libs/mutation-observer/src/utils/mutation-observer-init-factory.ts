import {ElementRef} from '@angular/core';
import {booleanAttribute} from './boolean-attribute';

export function mutationObserverInitFactory({
    nativeElement,
}: ElementRef<Element>): MutationObserverInit {
    const attributeFilter = nativeElement.getAttribute('attributeFilter');

    return {
        attributeFilter: attributeFilter?.split(',').map(attr => attr.trim()),
        attributeOldValue: booleanAttribute(nativeElement, 'attributeOldValue'),
        attributes: booleanAttribute(nativeElement, 'attributes'),
        characterData: booleanAttribute(nativeElement, 'characterData'),
        characterDataOldValue: booleanAttribute(nativeElement, 'characterDataOldValue'),
        childList: booleanAttribute(nativeElement, 'childList'),
        subtree: booleanAttribute(nativeElement, 'subtree'),
    };
}

import {ElementRef} from '@angular/core';
import {booleanAttribute} from './boolean-attribute';

export function mutationObserverInitFactory({
    nativeElement,
}: ElementRef<Element>): MutationObserverInit {
    const attributeFilterAttr = nativeElement.getAttribute('attributeFilter');
    const attributeFilter = attributeFilterAttr
        ? attributeFilterAttr.split(',').map(attr => attr.trim())
        : undefined;

    return {
        attributeFilter,
        attributeOldValue: booleanAttribute(nativeElement, 'attributeOldValue'),
        attributes: booleanAttribute(nativeElement, 'attributes'),
        characterData: booleanAttribute(nativeElement, 'characterData'),
        characterDataOldValue: booleanAttribute(nativeElement, 'characterDataOldValue'),
        childList: booleanAttribute(nativeElement, 'childList'),
        subtree: booleanAttribute(nativeElement, 'subtree'),
    };
}

import {ElementRef, inject} from '@angular/core';

export function waInjectElement<T = HTMLElement>(): T {
    return inject(ElementRef).nativeElement;
}

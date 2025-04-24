import {ElementRef, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {SafeObserver} from '../classes/safe-observer';
import {RESIZE_OPTION_BOX} from '../tokens/resize-option-box';
import {RESIZE_WATCHED_ELEMENT} from '../tokens/resize-watched-element';

@Injectable()
export class ResizeObserverService extends Observable<readonly ResizeObserverEntry[]> {
    constructor() {
        const nativeElement =
            inject(RESIZE_WATCHED_ELEMENT, {optional: true}) ??
            inject(ElementRef).nativeElement;
        const box = inject(RESIZE_OPTION_BOX);

        super((subscriber) => {
            const observer = new SafeObserver((entries) => subscriber.next(entries));

            observer.observe(nativeElement, {box});

            return () => {
                observer.disconnect();
            };
        });
    }
}

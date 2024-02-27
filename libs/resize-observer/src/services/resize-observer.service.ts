import {ElementRef, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {SafeObserver} from '../classes/safe-observer';
import {RESIZE_OPTION_BOX} from '../tokens/resize-option-box';

@Injectable()
export class ResizeObserverService extends Observable<readonly ResizeObserverEntry[]> {
    private readonly nativeElement: HTMLElement = inject(ElementRef).nativeElement;
    private readonly box = inject(RESIZE_OPTION_BOX);

    constructor() {
        super(subscriber => {
            const observer = new SafeObserver(entries => subscriber.next(entries));

            observer.observe(this.nativeElement, {box: this.box});

            return () => {
                observer.disconnect();
            };
        });
    }
}

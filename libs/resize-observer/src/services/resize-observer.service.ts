import {ElementRef, Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {SafeObserver} from '../classes/safe-observer';
import {RESIZE_OPTION_BOX} from '../tokens/resize-option-box';

@Injectable()
export class ResizeObserverService extends Observable<readonly ResizeObserverEntry[]> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(RESIZE_OPTION_BOX) box: ResizeObserverBoxOptions,
    ) {
        super(subscriber => {
            const observer = new SafeObserver(entries => subscriber.next(entries));

            observer.observe(nativeElement, {box});

            return () => {
                observer.disconnect();
            };
        });
    }
}

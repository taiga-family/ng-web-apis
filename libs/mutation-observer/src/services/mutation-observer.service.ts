import {ElementRef, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {SafeObserver} from '../classes/safe-observer';
import {WA_MUTATION_OBSERVER_INIT} from '../tokens/mutation-observer-init';

@Injectable()
export class WaMutationObserverService extends Observable<readonly MutationRecord[]> {
    constructor() {
        const nativeElement: Node = inject(ElementRef).nativeElement;
        const config = inject(WA_MUTATION_OBSERVER_INIT);

        super((subscriber) => {
            const observer = new SafeObserver((records) => {
                subscriber.next(records);
            });

            observer.observe(nativeElement, config);

            return () => {
                observer.disconnect();
            };
        });
    }
}

/**
 * @deprecated DO NOT USE!!!
 */
export const MutationObserverService = WaMutationObserverService;

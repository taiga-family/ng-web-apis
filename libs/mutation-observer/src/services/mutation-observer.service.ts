import {ElementRef, Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {MUTATION_OBSERVER_INIT} from '../tokens/mutation-observer-init';

@Injectable()
export class MutationObserverService extends Observable<readonly MutationRecord[]> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Node>,
        @Inject(MUTATION_OBSERVER_INIT) config: MutationObserverInit,
    ) {
        super(subscriber => {
            const observer = new MutationObserver(records => {
                subscriber.next(records);
            });

            observer.observe(nativeElement, config);

            return () => {
                observer.disconnect();
            };
        });
    }
}

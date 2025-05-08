import {ElementRef, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {SafeObserver} from '../classes/safe-observer';
import {MUTATION_OBSERVER_INIT} from '../tokens/mutation-observer-init';
import {MUTATION_WATCHED_ELEMENT} from '../tokens/mutation-watched-element';

@Injectable()
export class MutationObserverService extends Observable<readonly MutationRecord[]> {
    constructor() {
        const nativeElement: Node =
            inject(MUTATION_WATCHED_ELEMENT, {optional: true}) ??
            inject(ElementRef).nativeElement;
        const config = inject(MUTATION_OBSERVER_INIT);

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

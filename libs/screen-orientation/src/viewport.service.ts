import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {
    EMPTY,
    filter,
    fromEvent,
    map,
    merge,
    Observable,
    shareReplay,
    startWith,
} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ViewportService extends Observable<VisualViewport> {
    private readonly doc = inject(DOCUMENT);

    private readonly stream$ = this.doc.defaultView?.visualViewport
        ? merge(
              fromEvent(this.doc.defaultView.visualViewport, 'resize'),
              fromEvent(this.doc.defaultView.visualViewport, 'scroll'),
              fromEvent(this.doc.defaultView.visualViewport, 'scrollend'),
          ).pipe(
              startWith(null),
              map(() => this.doc.defaultView?.visualViewport),
              filter(Boolean),
              shareReplay({bufferSize: 1, refCount: true}),
          )
        : EMPTY;

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }
}

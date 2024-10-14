import {inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {EMPTY, filter, fromEvent, map, merge, Observable, shareReplay} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ViewportService extends Observable<VisualViewport> {
    private readonly visualViewport = inject(WINDOW).visualViewport;

    private readonly stream$ = this.visualViewport
        ? merge(
              fromEvent(this.visualViewport, 'resize'),
              fromEvent(this.visualViewport, 'scroll'),
              fromEvent(this.visualViewport, 'scrollend'),
          ).pipe(
              map(() => this.visualViewport),
              filter(Boolean),
              shareReplay({bufferSize: 1, refCount: true}),
          )
        : EMPTY;

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }
}

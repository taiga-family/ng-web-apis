import {inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {fromEvent, map, Observable, shareReplay, startWith} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ScreenOrientationService extends Observable<OrientationType> {
    private readonly win: Window = inject(WINDOW);

    private readonly stream$ = (this.isModern
        ? fromEvent(this.win.screen.orientation, 'change').pipe(
              startWith(null),
              map(
                  (): OrientationType =>
                      /**
                       * https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
                       * The type read-only property of the ScreenOrientation interface returns the document's current orientation type,
                       * one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".
                       *
                       * Browser compatibility:
                       * Safari 16.4+, Chrome 38+, Firefox 43+
                       */
                      this.win.screen.orientation.type,
              ),
          )
        : fromEvent(this.win, 'orientationchange').pipe(
              startWith(null),
              map((): OrientationType => {
                  /**
                   * https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation
                   * Its only possible values are -90, 0, 90, and 180.
                   * Positive values are counterclockwise; negative values are clockwise.
                   */
                  const angle = parseInt(
                      this.win.orientation as unknown as string,
                      10,
                  ) as -90 | 0 | 90 | 180;

                  switch (angle) {
                      case 0:
                          return 'portrait-primary';
                      case 180:
                          return 'portrait-secondary';
                      case 90:
                          return 'landscape-primary';
                      case -90:
                          return 'landscape-secondary';
                  }
              }),
          )
    ).pipe(shareReplay({bufferSize: 1, refCount: true}));

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    private get isModern(): boolean {
        return !!this.win?.screen?.orientation;
    }
}

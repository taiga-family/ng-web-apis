import {inject, Injectable, NgZone, OnDestroy} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {Subscription} from 'rxjs';

import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';
import {Context2dProcessor} from '../types/context-processor';

@Injectable()
export class DrawService implements OnDestroy, CanvasMethod {
    private readonly parent = inject(CANVAS_PROPERTIES, {skipSelf: true});
    private readonly properties = inject(CANVAS_PROPERTIES);
    private readonly context = inject(CANVAS_2D_CONTEXT);
    private readonly animationFrame$ = inject(ANIMATION_FRAME);
    private readonly ngZone = inject(NgZone);
    private readonly subscription: Subscription;

    constructor() {
        this.subscription = this.ngZone.runOutsideAngular(() =>
            this.animationFrame$.subscribe(() => {
                this.context.save();
                this.parent.forEach(property => property.call(this.context));
                this.properties.forEach(property => property.call(this.context));
                this.call(this.context);
                this.context.restore();
            }),
        );
    }

    call: Context2dProcessor = (): void => {};

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

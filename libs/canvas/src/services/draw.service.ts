import {Inject, Injectable, NgZone, OnDestroy} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {Observable, Subscription} from 'rxjs';
import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';
import {Context2dProcessor} from '../types/context-processor';

// @dynamic
@Injectable()
export class DrawService implements OnDestroy, CanvasMethod {
    call: Context2dProcessor = () => {};

    private readonly subscription: Subscription;

    constructor(
        @Inject(CANVAS_PROPERTIES) properties: CanvasMethod[],
        @Inject(CANVAS_2D_CONTEXT) context: CanvasRenderingContext2D,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
        @Inject(NgZone) ngZone: NgZone,
    ) {
        this.subscription = ngZone.runOutsideAngular(() =>
            animationFrame$.subscribe(() => {
                context.save();
                properties.forEach(property => property.call(context));
                this.call(context);
                context.restore();
            }),
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

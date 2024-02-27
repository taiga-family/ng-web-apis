import {inject, Injectable, NgZone, OnDestroy} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {Subscription} from 'rxjs';

import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';
import {Context2dProcessor} from '../types/context-processor';

@Injectable()
export class DrawService implements OnDestroy, CanvasMethod {
    private readonly subscription: Subscription;

    constructor() {
        const parent = inject(CANVAS_PROPERTIES, {skipSelf: true});
        const properties = inject(CANVAS_PROPERTIES);
        const context = inject(CANVAS_2D_CONTEXT);
        const animationFrame$ = inject(ANIMATION_FRAME);
        const ngZone = inject(NgZone);

        this.subscription = ngZone.runOutsideAngular(() =>
            animationFrame$.subscribe(() => {
                context.save();
                parent.forEach(property => property.call(context));
                properties.forEach(property => property.call(context));
                this.call(context);
                context.restore();
            }),
        );
    }

    public call: Context2dProcessor = (): void => {};

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

import {inject, Injectable, NgZone, type OnDestroy} from '@angular/core';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {type Subscription} from 'rxjs';

import {type CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_2D_CONTEXT} from '../tokens/canvas-2d-context';
import {CANVAS_PROPERTIES} from '../tokens/canvas-properties';
import {type Context2dProcessor} from '../types/context-processor';

@Injectable()
export class WaDrawService implements OnDestroy, CanvasMethod {
    private readonly subscription: Subscription;

    constructor() {
        const parent = inject(CANVAS_PROPERTIES, {skipSelf: true});
        const properties = inject(CANVAS_PROPERTIES);
        const context = inject(CANVAS_2D_CONTEXT);
        const animationFrame$ = inject(WA_ANIMATION_FRAME);
        const ngZone = inject(NgZone);

        this.subscription = ngZone.runOutsideAngular(() =>
            animationFrame$.subscribe(() => {
                context.save();
                parent.forEach((property) => property.call(context));
                properties.forEach((property) => property.call(context));
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

/**
 * @deprecated: use {@link WaDrawService}
 */
export const DrawService = WaDrawService;

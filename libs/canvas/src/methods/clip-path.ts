import {Component, ContentChildren, QueryList} from '@angular/core';

import type {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Component({
    standalone: true,
    selector: 'canvas-clip-path',
    template: `
        <ng-content></ng-content>
    `,
})
export class WaCanvasClipPath {
    @ContentChildren(CANVAS_METHOD)
    public readonly pathSteps = new QueryList<CanvasMethod>();
}

/**
 * @deprecated: use {@link WaCanvasClipPath}
 */
export const ClipPathComponent = WaCanvasClipPath;

import {ChangeDetectionStrategy, Component, contentChildren} from '@angular/core';

import {CANVAS_METHOD} from '../tokens/canvas-method';

@Component({
    standalone: true,
    selector: 'canvas-clip-path',
    template: `
        <ng-content />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaCanvasClipPath {
    public readonly pathSteps = contentChildren(CANVAS_METHOD);
}

/**
 * @deprecated: use {@link WaCanvasClipPath}
 */
export const ClipPathComponent = WaCanvasClipPath;

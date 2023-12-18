import {Component, ContentChildren, QueryList} from '@angular/core';

import {CanvasMethod} from '../interfaces/canvas-method';
import {CANVAS_METHOD} from '../tokens/canvas-method';

@Component({
    standalone: true,
    selector: 'canvas-clip-path',
    template: `
        <ng-content></ng-content>
    `,
})
export class ClipPathComponent {
    @ContentChildren(CANVAS_METHOD)
    readonly pathSteps = new QueryList<CanvasMethod>();
}

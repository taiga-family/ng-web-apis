import {Directive, ElementRef, inject} from '@angular/core';

import {ResizeObserverService} from '../services/resize-observer.service';
import {RESIZE_OPTION_BOX, RESIZE_OPTION_BOX_DEFAULT} from '../tokens/resize-option-box';

@Directive({
    standalone: true,
    selector: '[waResizeObserver]',
    inputs: ['waResizeBox: box'],
    outputs: ['waResizeObserver'],
    providers: [
        ResizeObserverService,
        {
            provide: RESIZE_OPTION_BOX,
            useFactory: (): ResizeObserverBoxOptions =>
                inject(ElementRef).nativeElement.getAttribute('waResizeBox') ||
                RESIZE_OPTION_BOX_DEFAULT,
        },
    ],
})
export class WaResizeObserver {
    protected readonly waResizeObserver = inject(ResizeObserverService);

    public box: ResizeObserverBoxOptions = RESIZE_OPTION_BOX_DEFAULT;
}

/**
 * @deprecated: use {@link WaResizeObserver}
 */
export const ResizeObserverDirective = WaResizeObserver;

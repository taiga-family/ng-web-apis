import {Directive, ElementRef, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';

import {WaResizeObserverService} from '../services/resize-observer.service';
import {
    WA_RESIZE_OPTION_BOX,
    WA_RESIZE_OPTION_BOX_DEFAULT,
} from '../tokens/resize-option-box';

@Directive({
    selector: '[waResizeObserver]',
    inputs: ['waResizeBox'],
    providers: [
        WaResizeObserverService,
        {
            provide: WA_RESIZE_OPTION_BOX,
            useFactory: (): ResizeObserverBoxOptions =>
                inject(ElementRef).nativeElement.getAttribute('waResizeBox') ||
                WA_RESIZE_OPTION_BOX_DEFAULT,
        },
    ],
})
export class WaResizeObserver {
    protected readonly waResizeObserver = outputFromObservable(
        inject(WaResizeObserverService),
    );

    public waResizeBox = WA_RESIZE_OPTION_BOX_DEFAULT;
}

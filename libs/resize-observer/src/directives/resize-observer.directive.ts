import {Attribute, Directive, ElementRef, inject} from '@angular/core';

import {ResizeObserverService} from '../services/resize-observer.service';
import {RESIZE_OPTION_BOX, RESIZE_OPTION_BOX_DEFAULT} from '../tokens/resize-option-box';

@Directive({
    standalone: true,
    selector: '[waResizeObserver]',
    outputs: ['waResizeObserver'],
    providers: [
        ResizeObserverService,
        {
            provide: RESIZE_OPTION_BOX,
            deps: [ElementRef],
            useFactory: ({
                nativeElement,
            }: ElementRef<Element>): ResizeObserverBoxOptions => {
                const attribute = nativeElement.getAttribute(
                    'waResizeBox',
                ) as ResizeObserverBoxOptions;

                return attribute || RESIZE_OPTION_BOX_DEFAULT;
            },
        },
    ],
})
export class ResizeObserverDirective {
    protected readonly waResizeObserver = inject(ResizeObserverService);

    constructor(
        // eslint-disable-next-line @angular-eslint/no-attribute-decorator
        @Attribute('waResizeBox') protected readonly box: ResizeObserverBoxOptions,
    ) {}
}

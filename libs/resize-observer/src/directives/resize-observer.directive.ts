import {Attribute, Directive, ElementRef, Inject} from '@angular/core';
import {Observable} from 'rxjs';

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
    constructor(
        @Inject(ResizeObserverService)
        readonly waResizeObserver: Observable<ResizeObserverEntry[]>,
        // eslint-disable-next-line @angular-eslint/no-attribute-decorator
        @Attribute('waResizeBox') _box: ResizeObserverBoxOptions,
    ) {}
}

import {NgModule} from '@angular/core';

import {WaIntersectionObservee} from './directives/intersection-observee.directive';
import {WaIntersectionObserverDirective} from './directives/intersection-observer.directive';
import {WaIntersectionRoot} from './directives/intersection-root.directive';

export const WaIntersectionObserver = [
    WaIntersectionObserverDirective,
    WaIntersectionObservee,
    WaIntersectionRoot,
] as const;

/**
 * @deprecated: use {@link WaIntersectionObserver}
 */
@NgModule({
    imports: [
        WaIntersectionObservee,
        WaIntersectionObserverDirective,
        WaIntersectionRoot,
    ],
    exports: [
        WaIntersectionObserverDirective,
        WaIntersectionObservee,
        WaIntersectionRoot,
    ],
})
export class IntersectionObserverModule {}

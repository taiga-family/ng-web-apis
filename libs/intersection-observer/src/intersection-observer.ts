import {WaIntersectionObservee} from './directives/intersection-observee.directive';
import {WaIntersectionObserverDirective} from './directives/intersection-observer.directive';
import {WaIntersectionRoot} from './directives/intersection-root.directive';

export const WaIntersectionObserver = [
    WaIntersectionObserverDirective,
    WaIntersectionObservee,
    WaIntersectionRoot,
] as const;

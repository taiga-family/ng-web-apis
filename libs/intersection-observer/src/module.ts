import {WaObservee} from './directives/intersection-observee.directive';
import {WaObserver} from './directives/intersection-observer.directive';
import {WaIntersectionRoot} from './directives/intersection-root.directive';

export const WaIntersectionObserver = [WaObserver, WaObservee, WaIntersectionRoot];

/**
 * @deprecated: use {@link WaIntersectionObserver}
 */
export const IntersectionObserverModule = WaIntersectionObserver;

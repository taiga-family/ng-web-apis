import {NgModule} from '@angular/core';
import {IntersectionObserveeDirective} from './directives/intersection-observee.directive';
import {IntersectionObserverDirective} from './directives/intersection-observer.directive';
import {IntersectionRootDirective} from './directives/intersection-root.directive';

@NgModule({
    declarations: [
        IntersectionObserverDirective,
        IntersectionObserveeDirective,
        IntersectionRootDirective,
    ],
    exports: [
        IntersectionObserverDirective,
        IntersectionObserveeDirective,
        IntersectionRootDirective,
    ],
})
export class IntersectionObserverModule {}

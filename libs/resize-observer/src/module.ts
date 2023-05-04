import {NgModule} from '@angular/core';
import {ResizeObserverDirective} from './directives/resize-observer.directive';

@NgModule({
    declarations: [ResizeObserverDirective],
    exports: [ResizeObserverDirective],
})
export class ResizeObserverModule {}

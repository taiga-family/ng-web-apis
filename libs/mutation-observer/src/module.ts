import {NgModule} from '@angular/core';

import {MutationObserverDirective} from './directives/mutation-observer.directive';

@NgModule({
    declarations: [MutationObserverDirective],
    exports: [MutationObserverDirective],
})
export class MutationObserverModule {}

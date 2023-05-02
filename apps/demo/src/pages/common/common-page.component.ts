import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `common-page`,
    templateUrl: `./common-page.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonPageComponent {}

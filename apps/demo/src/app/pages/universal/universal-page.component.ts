import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `universal-page`,
    templateUrl: `./universal-page.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniversalPageComponent {}

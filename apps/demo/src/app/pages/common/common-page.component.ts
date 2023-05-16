import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `common-page`,
    templateUrl: `./common-page.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonPageComponent {
    readonly readme = import('../../../../../../libs/common/README.md?raw').then(a =>
        a.default.replace('![logo](logo.svg) ', ''),
    ) as any as Promise<string>;
}

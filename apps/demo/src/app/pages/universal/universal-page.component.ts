import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `universal-page`,
    templateUrl: `./universal-page.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniversalPageComponent {
    readonly readme = import('../../../../../../libs/universal/README.md?raw').then(a =>
        a.default.replace('![logo](logo.svg) ', ''),
    ) as any as Promise<string>;
}

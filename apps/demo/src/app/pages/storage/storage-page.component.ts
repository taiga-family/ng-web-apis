import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import {Example} from './example/example.component';

@Component({
    selector: 'common-page',
    imports: [Example, TuiAddonDoc],
    templateUrl: './storage-page.component.html',
    styleUrl: './storage-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StoragePage {
    protected readonly example = {
        TypeScript: import('./example/example.component.ts?raw'),
        HTML: import('./example/example.template.html'),
    };
}

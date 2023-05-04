import {ChangeDetectionStrategy, Component} from '@angular/core';

import {default as example1Ts} from './example/example.component.ts?raw';
import {default as example1Html} from './example/example.template.html?raw';

@Component({
    selector: `common-page`,
    templateUrl: `./storage-page.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoragePageComponent {
    readonly example = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };
}

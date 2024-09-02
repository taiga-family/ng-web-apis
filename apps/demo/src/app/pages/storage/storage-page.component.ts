import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiGroup} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

import {Example} from './example/example.component';

@Component({
    standalone: true,
    selector: 'common-page',
    imports: [
        CommonModule,
        Example,
        FormsModule,
        TuiAddonDoc,
        TuiGroup,
        TuiInputModule,
        TuiNotification,
    ],
    templateUrl: './storage-page.component.html',
    styleUrls: ['./storage-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StoragePage {
    protected readonly example = {
        TypeScript: import('./example/example.component.ts?raw'),
        HTML: import('./example/example.template.html?raw'),
    };
}

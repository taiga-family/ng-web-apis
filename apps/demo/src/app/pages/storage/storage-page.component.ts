import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDocExampleModule, TuiDocMainModule} from '@taiga-ui/addon-doc';
import {TuiGroupModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

import {ExampleComponent} from './example/example.component';

@Component({
    standalone: true,
    selector: 'common-page',
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiNotificationModule,
        TuiGroupModule,
        TuiDocExampleModule,
        TuiDocMainModule,
        ExampleComponent,
    ],
    templateUrl: './storage-page.component.html',
    styleUrls: ['./storage-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StoragePageComponent {
    readonly example = {
        TypeScript: import('./example/example.component.ts?raw'),
        HTML: import('./example/example.template.html?raw'),
    };
}

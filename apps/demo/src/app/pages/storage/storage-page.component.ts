import { TuiInputModule } from "@taiga-ui/legacy";
import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TuiDocExampleModule, TuiAddonDoc } from '@taiga-ui/addon-doc';
import { TuiNotification, TuiGroup } from '@taiga-ui/core';
import {Example} from './example/example.component';

@Component({
    standalone: true,
    selector: 'common-page',
    imports: [
        CommonModule,
        Example,
        FormsModule,
        TuiDocExampleModule,
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

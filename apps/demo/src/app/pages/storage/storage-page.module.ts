import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiDocExampleModule, TuiDocMainModule} from '@taiga-ui/addon-doc';
import {TuiGroupModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

import {ExampleComponent} from './example/example.component';
import {StoragePageComponent} from './storage-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiNotificationModule,
        TuiGroupModule,
        TuiDocExampleModule,
        TuiDocMainModule,
        RouterModule.forChild([{path: ``, component: StoragePageComponent}]),
    ],
    declarations: [StoragePageComponent, ExampleComponent],
})
export class StoragePageModule {}

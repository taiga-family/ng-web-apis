import {NgModule} from '@angular/core';
import {StoragePageComponent} from './storage-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ExampleComponent} from './example/example.component';
import {FormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiGroupModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiDocExampleModule, TuiDocMainModule} from '@taiga-ui/addon-doc';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiNotificationModule,
        TuiGroupModule,
        TuiDocExampleModule,
        TuiDocMainModule,
        RouterModule.forChild([{path: '', component: StoragePageComponent}]),
    ],
    declarations: [StoragePageComponent, ExampleComponent],
})
export class StoragePageModule {}

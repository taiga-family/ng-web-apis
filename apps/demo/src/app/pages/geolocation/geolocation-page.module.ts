import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiButtonModule, TuiLoaderModule} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

import {GeolocationPageComponent} from './geolocation-page.component';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        TuiButtonModule,
        TuiLoaderModule,
        RouterModule.forChild([{path: ``, component: GeolocationPageComponent}]),
    ],
    declarations: [GeolocationPageComponent],
})
export class GeolocationPageModule {}

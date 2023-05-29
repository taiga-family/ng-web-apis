import {NgModule} from '@angular/core';
import {GeolocationPageComponent} from './geolocation-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TuiButtonModule, TuiLoaderModule} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        TuiButtonModule,
        TuiLoaderModule,
        RouterModule.forChild([{path: '', component: GeolocationPageComponent}]),
    ],
    declarations: [GeolocationPageComponent],
})
export class GeolocationPageModule {}

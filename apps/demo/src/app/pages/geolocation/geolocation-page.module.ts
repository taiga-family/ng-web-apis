import {NgModule} from '@angular/core';
import {GeolocationPageComponent} from './geolocation-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {POSITION_OPTIONS} from '@ng-web-apis/geolocation';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
    imports: [
        CommonModule,
        HighlightModule,
        RouterModule.forChild([{path: '', component: GeolocationPageComponent}]),
    ],
    declarations: [GeolocationPageComponent, MapComponent],
    providers: [
        {
            provide: POSITION_OPTIONS,
            useValue: {enableHighAccuracy: true, timeout: 3000, maximumAge: 1000},
        },
    ],
})
export class GeolocationPageModule {}

import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, SecurityContext} from '@angular/core';
import {DomSanitizer, type SafeResourceUrl} from '@angular/platform-browser';
import {WaGeolocationService} from '@ng-web-apis/geolocation';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

import {SAMPLE} from './samples/sample';
import {SAMPLE_ASYNC} from './samples/sample-async';

@Component({
    selector: 'geolocation-page',
    imports: [CommonModule, HighlightModule, TuiButton, TuiLoader],
    templateUrl: './geolocation-page.component.html',
    styleUrl: './geolocation-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GeolocationPage {
    private readonly sanitizer = inject(DomSanitizer);

    protected watch = false;

    protected readonly sample = SAMPLE;
    protected readonly sampleAsync = SAMPLE_ASYNC;
    protected readonly geolocation$ = inject(WaGeolocationService);

    protected getUrl({coords}: GeolocationPosition): SafeResourceUrl {
        const {longitude, latitude} = coords;

        return (
            this.sanitizer.sanitize(
                SecurityContext.RESOURCE_URL,
                `//www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.005},${
                    latitude - 0.005
                },${longitude + 0.005},${
                    latitude + 0.005
                }&marker=${latitude},${longitude}&layer=mapnik`,
            ) ?? ''
        );
    }
}

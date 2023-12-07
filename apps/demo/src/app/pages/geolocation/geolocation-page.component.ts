import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {GeolocationService} from '@ng-web-apis/geolocation';
import {TuiButtonModule, TuiLoaderModule} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

import {SAMPLE} from './samples/sample';
import {SAMPLE_ASYNC} from './samples/sample-async';

@Component({
    standalone: true,
    selector: 'geolocation-page',
    imports: [CommonModule, TuiButtonModule, TuiLoaderModule, HighlightModule],
    templateUrl: './geolocation-page.component.html',
    styleUrls: ['./geolocation-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GeolocationPageComponent {
    watch = false;

    readonly sample = SAMPLE;
    readonly sampleAsync = SAMPLE_ASYNC;

    constructor(
        @Inject(GeolocationService) readonly geolocation$: GeolocationService,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    ) {}

    getUrl({coords}: GeolocationPosition): SafeResourceUrl {
        const {longitude, latitude} = coords;

        return this.sanitizer.bypassSecurityTrustResourceUrl(
            `//www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.005},${
                latitude - 0.005
            },${longitude + 0.005},${
                latitude + 0.005
            }&marker=${latitude},${longitude}&layer=mapnik`,
        );
    }
}

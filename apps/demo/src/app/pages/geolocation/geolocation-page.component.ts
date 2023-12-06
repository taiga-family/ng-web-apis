import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {GeolocationService} from '@ng-web-apis/geolocation';

import {SAMPLE} from './samples/sample';
import {SAMPLE_ASYNC} from './samples/sample-async';

@Component({
    selector: 'geolocation-page',
    templateUrl: './geolocation-page.component.html',
    styleUrls: ['./geolocation-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeolocationPageComponent {
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

import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
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
    private readonly sanitizer = inject(DomSanitizer);

    watch = false;

    readonly sample = SAMPLE;
    readonly sampleAsync = SAMPLE_ASYNC;
    readonly geolocation$ = inject(GeolocationService);

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

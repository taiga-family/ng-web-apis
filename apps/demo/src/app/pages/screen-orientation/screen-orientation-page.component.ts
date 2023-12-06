import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';

import {SAMPLE_HTML, SAMPLE_TS} from './samples/sample';

@Component({
    selector: 'screen-orientation-page',
    templateUrl: './screen-orientation-page.component.html',
    styleUrls: ['./screen-orientation-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenOrientationPageComponent {
    readonly sample = SAMPLE_TS;
    readonly sampleHtml = SAMPLE_HTML;

    constructor(
        @Inject(ScreenOrientationService) readonly orientation$: ScreenOrientationService,
    ) {}
}

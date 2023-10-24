import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';
import {SAMPLE_TS, SAMPLE_HTML} from './samples/sample';

@Component({
    selector: `screen-orientation-page`,
    templateUrl: `./screen-orientation-page.component.html`,
    styleUrls: [`./screen-orientation-page.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenOrientationPageComponent {
    readonly sample = SAMPLE_TS;
    readonly sampleHtml = SAMPLE_HTML;

    constructor(readonly orientation$: ScreenOrientationService) {}
}

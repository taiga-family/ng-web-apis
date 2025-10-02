import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';
import {HighlightModule} from 'ngx-highlightjs';

import {SAMPLE_HTML, SAMPLE_TS} from './samples/sample';

@Component({
    standalone: true,
    selector: 'screen-orientation-page',
    imports: [CommonModule, HighlightModule],
    templateUrl: './screen-orientation-page.component.html',
    styleUrl: './screen-orientation-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScreenOrientationPage {
    protected readonly orientation$ = inject(ScreenOrientationService);
    protected readonly sample = SAMPLE_TS;
    protected readonly sampleHtml = SAMPLE_HTML;
}

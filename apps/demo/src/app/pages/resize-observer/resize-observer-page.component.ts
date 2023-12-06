import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {RESIZE_OBSERVER_SUPPORT} from '@ng-web-apis/resize-observer';

@Component({
    selector: 'resize-observer-page',
    templateUrl: './resize-observer-page.component.html',
    styleUrls: ['./resize-observer-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizeObserverPageComponent {
    ratio = 0;
    widthPercent = 50;

    constructor(@Inject(RESIZE_OBSERVER_SUPPORT) readonly support: boolean) {}

    onResize(entry: ResizeObserverEntry[]): void {
        this.ratio = Math.round(entry[0].contentRect.width / 110);
    }
}

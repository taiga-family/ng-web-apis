import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    RESIZE_OBSERVER_SUPPORT,
    ResizeObserverModule,
} from '@ng-web-apis/resize-observer';

@Component({
    standalone: true,
    selector: 'resize-observer-page',
    imports: [CommonModule, FormsModule, ResizeObserverModule],
    templateUrl: './resize-observer-page.component.html',
    styleUrls: ['./resize-observer-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResizeObserverPageComponent {
    ratio = 0;
    widthPercent = 50;

    constructor(@Inject(RESIZE_OBSERVER_SUPPORT) readonly support: boolean) {}

    onResize(entry: ResizeObserverEntry[]): void {
        this.ratio = Math.round(entry[0].contentRect.width / 110);
    }
}
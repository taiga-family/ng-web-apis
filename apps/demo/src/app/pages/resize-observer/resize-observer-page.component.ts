import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_RESIZE_OBSERVER_SUPPORT, WaResizeObserver} from '@ng-web-apis/resize-observer';

@Component({
    selector: 'resize-observer-page',
    imports: [CommonModule, FormsModule, WaResizeObserver],
    templateUrl: './resize-observer-page.component.html',
    styleUrl: './resize-observer-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResizeObserverPage {
    protected readonly support = inject(WA_RESIZE_OBSERVER_SUPPORT);

    protected ratio = 0;
    protected widthPercent = 50;

    protected onResize(entry: readonly ResizeObserverEntry[]): void {
        this.ratio = Math.round((entry[0]?.contentRect.width ?? 0) / 110);
    }
}

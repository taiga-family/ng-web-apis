import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    RESIZE_OBSERVER_SUPPORT,
    ResizeObserverDirective,
} from '@ng-web-apis/resize-observer';

@Component({
    standalone: true,
    selector: 'resize-observer-page',
    imports: [CommonModule, FormsModule, ResizeObserverDirective],
    templateUrl: './resize-observer-page.component.html',
    styleUrls: ['./resize-observer-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResizeObserverPageComponent {
    protected readonly support = inject(RESIZE_OBSERVER_SUPPORT);

    protected ratio = 0;
    protected widthPercent = 50;

    protected onResize(entry: readonly ResizeObserverEntry[]): void {
        this.ratio = Math.round(entry[0].contentRect.width / 110);
    }
}

import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    WA_INTERSECTION_OBSERVER_SUPPORT,
    WaIntersectionObserver,
} from '@ng-web-apis/intersection-observer';

@Component({
    selector: 'intersection-observer-page',
    imports: [CommonModule, WaIntersectionObserver],
    templateUrl: './intersection-observer-page.component.html',
    styleUrl: './intersection-observer-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IntersectionObserverPage {
    protected ratio = 0;

    protected readonly support = inject(WA_INTERSECTION_OBSERVER_SUPPORT);

    protected onIntersection(intersections: IntersectionObserverEntry[]): void {
        this.ratio = Math.round((intersections[0]?.intersectionRatio ?? 0) * 10);
    }
}

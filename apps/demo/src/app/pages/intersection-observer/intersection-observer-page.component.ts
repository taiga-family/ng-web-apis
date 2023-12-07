import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
    INTERSECTION_OBSERVER_SUPPORT,
    IntersectionObserverModule,
} from '@ng-web-apis/intersection-observer';

@Component({
    standalone: true,
    selector: 'intersection-observer-page',
    imports: [CommonModule, IntersectionObserverModule],
    templateUrl: './intersection-observer-page.component.html',
    styleUrls: ['./intersection-observer-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IntersectionObserverPageComponent {
    ratio = 0;

    constructor(@Inject(INTERSECTION_OBSERVER_SUPPORT) readonly support: boolean) {}

    onIntersection(intersections: IntersectionObserverEntry[]): void {
        this.ratio = Math.round(intersections[0].intersectionRatio * 10);
    }
}

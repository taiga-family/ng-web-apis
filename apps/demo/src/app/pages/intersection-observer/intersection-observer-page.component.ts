import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {INTERSECTION_OBSERVER_SUPPORT} from '@ng-web-apis/intersection-observer';

@Component({
    selector: `intersection-observer-page`,
    templateUrl: `./intersection-observer-page.component.html`,
    styleUrls: [`./intersection-observer-page.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntersectionObserverPageComponent {
    ratio = 0;

    constructor(@Inject(INTERSECTION_OBSERVER_SUPPORT) readonly support: boolean) {}

    onIntersection(intersections: IntersectionObserverEntry[]) {
        this.ratio = Math.round(intersections[0].intersectionRatio * 10);
    }
}

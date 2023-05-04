import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `mutation-observer-page`,
    templateUrl: `./mutation-observer-page.component.html`,
    styleUrls: [`./mutation-observer-page.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MutationObserverPageComponent {
    toggled = false;

    disabled: true | null = null; // null so the attribute gets removed

    title = 'title';

    text = 'text';

    ignored = 'Ignored aria-label attribute';

    toggleDOM() {
        this.toggled = !this.toggled;
    }

    toggleAttr() {
        this.disabled = !this.disabled || null;
    }

    log(entries: MutationRecord[]) {
        console.info(entries);
    }
}

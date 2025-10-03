import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WaMutationObserver} from '@ng-web-apis/mutation-observer';
import {TuiButton, TuiGroup} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'mutation-observer-page',
    imports: [
        CommonModule,
        FormsModule,
        TuiButton,
        TuiGroup,
        TuiInputModule,
        TuiTextfieldControllerModule,
        WaMutationObserver,
    ],
    templateUrl: './mutation-observer-page.component.html',
    styleUrl: './mutation-observer-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MutationObserverPage {
    protected toggled = false;

    protected disabled: true | null = null; // null so the attribute gets removed

    protected title = 'title';

    protected text = 'text';

    protected ignored = 'Ignored aria-label attribute';

    protected toggleDOM(): void {
        this.toggled = !this.toggled;
    }

    protected toggleAttr(): void {
        this.disabled = !this.disabled || null;
    }

    protected log(entries: MutationRecord[]): void {
        console.info(entries);
    }
}

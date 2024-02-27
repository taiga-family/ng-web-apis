import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MutationObserverDirective} from '@ng-web-apis/mutation-observer';
import {
    TuiButtonModule,
    TuiGroupModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'mutation-observer-page',
    imports: [
        CommonModule,
        FormsModule,
        TuiButtonModule,
        TuiGroupModule,
        TuiInputModule,
        MutationObserverDirective,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './mutation-observer-page.component.html',
    styleUrls: ['./mutation-observer-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MutationObserverPageComponent {
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

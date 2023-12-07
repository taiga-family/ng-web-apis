import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MutationObserverModule} from '@ng-web-apis/mutation-observer';
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
        MutationObserverModule,
        TuiButtonModule,
        TuiGroupModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './mutation-observer-page.component.html',
    styleUrls: ['./mutation-observer-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MutationObserverPageComponent {
    toggled = false;

    disabled: true | null = null; // null so the attribute gets removed

    title = 'title';

    text = 'text';

    ignored = 'Ignored aria-label attribute';

    toggleDOM(): void {
        this.toggled = !this.toggled;
    }

    toggleAttr(): void {
        this.disabled = !this.disabled || null;
    }

    log(entries: MutationRecord[]): void {
        console.info(entries);
    }
}

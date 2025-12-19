import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {
    filterByKey,
    toValue,
    WA_STORAGE_EVENT,
    WaStorageService,
} from '@ng-web-apis/storage';
import {TuiGroup, TuiNotification, TuiTextfield} from '@taiga-ui/core';
import {type Observable} from 'rxjs';

@Component({
    selector: 'example',
    imports: [CommonModule, FormsModule, TuiGroup, TuiNotification, TuiTextfield],
    templateUrl: './example.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example {
    private readonly storageService = inject(WaStorageService);
    private readonly storage = inject(WA_LOCAL_STORAGE);

    protected readonly value$: Observable<string | null> = inject(WA_STORAGE_EVENT).pipe(
        filterByKey('value'),
        toValue(),
    );

    protected native = '';

    protected service = '';

    protected index = 0;

    protected withStorage(value: string): void {
        this.storage?.setItem('value', value);
        this.native = value;
    }

    protected withService(value: string): void {
        this.storageService.setItem('value', value);
        this.service = value;
    }
}

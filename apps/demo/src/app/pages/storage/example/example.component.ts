import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {filterByKey, STORAGE_EVENT, StorageService, toValue} from '@ng-web-apis/storage';
import {TuiNotification} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';
import {type Observable} from 'rxjs';

@Component({
    selector: 'example',
    imports: [CommonModule, FormsModule, TuiInputModule, TuiNotification],
    templateUrl: './example.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example {
    private readonly storageService = inject(StorageService);
    private readonly storage = inject(WA_LOCAL_STORAGE);

    protected readonly value$: Observable<string | null> = inject(STORAGE_EVENT).pipe(
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

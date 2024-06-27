import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {filterByKey, STORAGE_EVENT, StorageService, toValue} from '@ng-web-apis/storage';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'example',
    imports: [CommonModule, TuiNotificationModule, TuiInputModule, FormsModule],
    templateUrl: './example.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example {
    private readonly storageService = inject(StorageService);
    private readonly storage = inject(LOCAL_STORAGE);

    protected readonly value$: Observable<string | null> = inject(STORAGE_EVENT).pipe(
        filterByKey('value'),
        toValue(),
    );

    protected native = '';

    protected service = '';

    protected index = 0;

    protected withStorage(value: string): void {
        this.storage.setItem('value', value);
        this.native = value;
    }

    protected withService(value: string): void {
        this.storageService.setItem('value', value);
        this.service = value;
    }
}

import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {filterByKey, STORAGE_EVENT, StorageService, toValue} from '@ng-web-apis/storage';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import {Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'example',
    imports: [CommonModule, TuiNotificationModule, TuiInputModule, FormsModule],
    templateUrl: './example.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {
    readonly value$: Observable<string | null> = inject(STORAGE_EVENT).pipe(
        filterByKey('value'),
        toValue(),
    );

    native = '';

    service = '';

    index = 0;

    constructor(
        @Inject(LOCAL_STORAGE) private readonly storage: Storage,
        @Inject(StorageService) private readonly storageService: Storage,
    ) {}

    withStorage(value: string): void {
        this.storage.setItem('value', value);
        this.native = value;
    }

    withService(value: string): void {
        this.storageService.setItem('value', value);
        this.service = value;
    }
}

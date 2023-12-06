import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {filterByKey, STORAGE_EVENT, StorageService, toValue} from '@ng-web-apis/storage';
import {Observable} from 'rxjs';

@Component({
    selector: 'example',
    templateUrl: './example.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {
    readonly value$ = this.event$.pipe(filterByKey('value'), toValue());

    native = '';

    service = '';

    index = 0;

    constructor(
        @Inject(STORAGE_EVENT) private readonly event$: Observable<StorageEvent>,
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

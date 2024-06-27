"use strict";exports.id=633,exports.ids=[633],exports.modules={95633:module=>{module.exports="import {CommonModule} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {LOCAL_STORAGE} from '@ng-web-apis/common';\nimport {filterByKey, STORAGE_EVENT, StorageService, toValue} from '@ng-web-apis/storage';\nimport {TuiNotificationModule} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/kit';\nimport type {Observable} from 'rxjs';\n\n@Component({\n    standalone: true,\n    selector: 'example',\n    imports: [CommonModule, TuiNotificationModule, TuiInputModule, FormsModule],\n    templateUrl: './example.template.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class Example {\n    private readonly storageService = inject(StorageService);\n    private readonly storage = inject(LOCAL_STORAGE);\n\n    protected readonly value$: Observable<string | null> = inject(STORAGE_EVENT).pipe(\n        filterByKey('value'),\n        toValue(),\n    );\n\n    protected native = '';\n\n    protected service = '';\n\n    protected index = 0;\n\n    protected withStorage(value: string): void {\n        this.storage.setItem('value', value);\n        this.native = value;\n    }\n\n    protected withService(value: string): void {\n        this.storageService.setItem('value', value);\n        this.service = value;\n    }\n}\n"}};
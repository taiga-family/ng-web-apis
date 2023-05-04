import {ClassProvider} from '@angular/core';
import {SESSION_STORAGE} from '@ng-web-apis/common';
import {StorageMock} from '../classes/storage-mock';

export const UNIVERSAL_SESSION_STORAGE: ClassProvider = {
    provide: SESSION_STORAGE,
    useClass: StorageMock,
};

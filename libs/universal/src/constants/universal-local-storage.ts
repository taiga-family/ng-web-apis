import type {ClassProvider} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';

import {StorageMock} from '../classes/storage-mock';

export const UNIVERSAL_LOCAL_STORAGE: ClassProvider = {
    provide: LOCAL_STORAGE,
    useClass: StorageMock,
};

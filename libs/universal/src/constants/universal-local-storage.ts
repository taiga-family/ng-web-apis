import {type ClassProvider} from '@angular/core';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';

import {StorageMock} from '../classes/storage-mock';

export const UNIVERSAL_LOCAL_STORAGE: ClassProvider = {
    provide: WA_LOCAL_STORAGE,
    useClass: StorageMock,
};

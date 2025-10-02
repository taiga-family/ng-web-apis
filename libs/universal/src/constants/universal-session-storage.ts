import {type ClassProvider} from '@angular/core';
import {WA_SESSION_STORAGE} from '@ng-web-apis/common';

import {StorageMock} from '../classes/storage-mock';

export const UNIVERSAL_SESSION_STORAGE: ClassProvider = {
    provide: WA_SESSION_STORAGE,
    useClass: StorageMock,
};

import {type ValueProvider} from '@angular/core';
import {MEDIA_DEVICES} from '@ng-web-apis/common';

import {NAVIGATOR_MOCK} from './universal-navigator';

export const UNIVERSAL_MEDIA_DEVICES: ValueProvider = {
    provide: MEDIA_DEVICES,
    useValue: NAVIGATOR_MOCK.mediaDevices,
};

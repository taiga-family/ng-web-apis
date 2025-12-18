import {type FactoryProvider, Optional} from '@angular/core';
import {WA_LOCATION} from '@ng-web-apis/common';

import {LocationMock} from '../classes/location-mock';
import {WA_SSR_LOCATION} from '../tokens/ssr-location';

export const UNIVERSAL_LOCATION: FactoryProvider = {
    provide: WA_LOCATION,
    deps: [[new Optional(), WA_SSR_LOCATION]],
    useFactory: (location: Location | null) => location || new LocationMock(),
};

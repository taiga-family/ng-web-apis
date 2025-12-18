import {type FactoryProvider, Optional} from '@angular/core';
import {WA_USER_AGENT} from '@ng-web-apis/common';

import {WA_SSR_USER_AGENT} from '../tokens/ssr-user-agent';

export const UNIVERSAL_USER_AGENT: FactoryProvider = {
    provide: WA_USER_AGENT,
    deps: [[new Optional(), WA_SSR_USER_AGENT]],
    useFactory: (userAgent: string | null) => userAgent ?? '',
};

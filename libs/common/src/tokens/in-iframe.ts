import {isPlatformBrowser} from '@angular/common';
import {inject, InjectionToken, PLATFORM_ID} from '@angular/core';

import {WINDOW} from './window';

export const WA_IN_IFRAME = new InjectionToken<boolean>(
    '[WA_IN_IFRAME]: Identify if a webpage is being loaded inside an iframe',
    {
        factory: () => {
            const windowRef = inject(WINDOW);

            return isPlatformBrowser(inject(PLATFORM_ID))
                ? windowRef.self !== windowRef.top
                : false;
        },
    },
);

import {inject, InjectionToken, REQUEST} from '@angular/core';

export const WA_SSR_USER_AGENT = new InjectionToken<string>('[WA_SSR_USER_AGENT]', {
    factory: () => {
        const req = inject(REQUEST, {optional: true});

        return req?.headers.get('user-agent') ?? '';
    },
});

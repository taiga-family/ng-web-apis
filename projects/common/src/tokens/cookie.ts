import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';

export const COOKIE = new InjectionToken<string>(
    'An abstraction over document.cookie string',
    {
        factory: () => inject(DOCUMENT).cookie,
    },
);

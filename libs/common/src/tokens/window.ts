import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';

export const WINDOW = new InjectionToken<Window>(
    `[WINDOW]: An abstraction over global window object`,
    {
        factory: () => {
            const {defaultView} = inject(DOCUMENT);

            if (!defaultView) {
                throw new Error(`Window is not available`);
            }

            return defaultView;
        },
    },
);

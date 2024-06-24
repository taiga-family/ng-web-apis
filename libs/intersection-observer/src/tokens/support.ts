import {InjectionToken} from '@angular/core';

/**
 * @deprecated Always true. Kept for backward compatibility.
 */
export const INTERSECTION_OBSERVER_SUPPORT = new InjectionToken<boolean>(
    'Intersection Observer API support',
    {
        providedIn: 'root',
        factory: () => true,
    },
);

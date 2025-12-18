import {InjectionToken, type Provider} from '@angular/core';

export const WA_MUTATION_OBSERVER_INIT = new InjectionToken<MutationObserverInit>(
    '[WA_MUTATION_OBSERVER_INIT]',
);

export function provideMutationObserverInit(useValue: MutationObserverInit): Provider {
    return {provide: WA_MUTATION_OBSERVER_INIT, useValue};
}

import {InjectionToken} from '@angular/core';

export interface CloseWatcher {
    destroy(): void;
    onclose?(event: Event): void;
    oncancel?(event: Event): void;
}

export const WA_CLOSE_WATCHER = new InjectionToken<CloseWatcher>('[WA_CLOSE_WATCHER]', {
    factory: () => {
        try {
            // @ts-ignore
            return new CloseWatcher();
        } catch {
            return {destroy: () => {}};
        }
    },
});

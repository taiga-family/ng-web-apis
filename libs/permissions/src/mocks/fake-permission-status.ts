export class FakePermissionStatus implements PermissionStatus {
    readonly name: string = 'fakePermissionStatus';

    constructor(public state: PermissionState) {}

    onchange: ((this: PermissionStatus, ev: Event) => any) | null = null;

    simulateStateChange(state: PermissionState) {
        this.state = state;

        if (this.onchange) {
            const event: Event = {type: 'change', target: this} as any;

            this.onchange(event);
        }
    }

    addEventListener<K extends 'change'>(
        type: K,
        listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
        _options?: boolean | AddEventListenerOptions,
    ) {
        if (type !== 'change') {
            throw new Error(`Listeners for event "${type}" are not supported`);
        }

        this.onchange = listener;
    }

    removeEventListener<K extends 'change'>(
        type: K,
        _listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
        _options?: boolean | EventListenerOptions,
    ) {
        if (type !== 'change') {
            throw new Error(`Listeners for event "${type}" are not supported`);
        }

        this.onchange = null;
    }

    dispatchEvent(_event: Event): boolean {
        throw new Error('Method not implemented.');
    }
}

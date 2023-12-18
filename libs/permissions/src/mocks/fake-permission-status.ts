export class FakePermissionStatus implements PermissionStatus {
    readonly name: string = 'fakePermissionStatus';

    onchange: ((this: PermissionStatus, ev: Event) => any) | null = null;

    constructor(public state: PermissionState) {}

    simulateStateChange(state: PermissionState): void {
        this.state = state;

        if (this.onchange) {
            const event: Event = {type: 'change', target: this} as any;

            this.onchange(event);
        }
    }

    addEventListener<K extends 'change'>(
        type: K,
        listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
        _options?: AddEventListenerOptions | boolean,
    ): void {
        if (type !== 'change') {
            throw new Error(`Listeners for event "${type}" are not supported`);
        }

        this.onchange = listener;
    }

    removeEventListener<K extends 'change'>(
        type: K,
        _listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
        _options?: EventListenerOptions | boolean,
    ): void {
        if (type !== 'change') {
            throw new Error(`Listeners for event "${type}" are not supported`);
        }

        this.onchange = null;
    }

    dispatchEvent(_event: Event): boolean {
        throw new Error('Method not implemented.');
    }
}

export class FakePermissionStatus implements PermissionStatus {
    public readonly name: string = 'fakePermissionStatus';
    public state: PermissionState;

    public onchange: ((this: PermissionStatus, ev: Event) => any) | null = null;

    constructor(state: PermissionState) {
        this.state = state;
    }

    public simulateStateChange(state: PermissionState): void {
        this.state = state;

        if (this.onchange) {
            const event: Event = {type: 'change', target: this} as any;

            this.onchange(event);
        }
    }

    public addEventListener<K extends 'change'>(
        type: K,
        listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
        _options?: AddEventListenerOptions | boolean,
    ): void {
        if ((type as string) !== 'change') {
            throw new Error(`Listeners for event "${type}" are not supported`);
        }

        this.onchange = listener;
    }

    public removeEventListener<K extends 'change'>(
        type: K,
        _listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
        _options?: EventListenerOptions | boolean,
    ): void {
        if ((type as string) !== 'change') {
            throw new Error(`Listeners for event "${type}" are not supported`);
        }

        this.onchange = null;
    }

    public dispatchEvent(_event: Event): boolean {
        throw new Error('Method not implemented.');
    }
}

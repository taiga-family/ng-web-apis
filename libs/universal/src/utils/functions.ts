export function identity<T>(v: T): T {
    return v;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function emptyFunction(): void {}

export function emptyArray(): any[] {
    return [];
}

export function emptyObject(): object {
    return {};
}

export function alwaysFalse(): boolean {
    return false;
}

export function alwaysNull(): null {
    return null;
}

export function alwaysZero(): number {
    return 0;
}

export async function alwaysRejected(): Promise<any> {
    return Promise.reject().catch(emptyFunction);
}

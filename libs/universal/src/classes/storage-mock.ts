export class StorageMock implements Storage {
    private readonly storage = new Map<string, string>();

    public get length(): number {
        return this.storage.size;
    }

    public getItem(key: string): string | null {
        return this.storage.has(key) ? this.storage.get(key)! : null;
    }

    public setItem(key: string, value: string): void {
        this.storage.set(key, value);
    }

    public clear(): void {
        this.storage.clear();
    }

    public key(index: number): string | null {
        return index < this.storage.size
            ? ([...this.storage.keys()]?.[index] ?? null)
            : null;
    }

    public removeItem(key: string): void {
        this.storage.delete(key);
    }
}

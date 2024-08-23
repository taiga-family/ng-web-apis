import {inject, Injectable} from '@angular/core';
import { WA_WINDOW, WA_LOCAL_STORAGE } from '@ng-web-apis/common';

@Injectable({
    providedIn: 'root',
})
export class StorageService implements Storage {
    private readonly localStorage = inject(WA_LOCAL_STORAGE);
    private readonly windowRef = inject(WA_WINDOW);

    public get length(): number {
        return this.localStorage.length;
    }

    public getItem(key: string): string | null {
        return this.localStorage.getItem(key);
    }

    public setItem(key: string, value: string): void {
        const oldValue = this.getItem(key);

        this.localStorage.setItem(key, value);
        this.notify(key, value, oldValue);
    }

    public removeItem(key: string): void {
        const oldValue = this.getItem(key);

        this.localStorage.removeItem(key);
        this.notify(key, null, oldValue);
    }

    public clear(): void {
        this.localStorage.clear();
        this.notify(null, null, null);
    }

    public key(index: number): string | null {
        return this.localStorage.key(index);
    }

    private notify(
        key: string | null,
        newValue: string | null,
        oldValue: string | null,
    ): void {
        const event = new StorageEvent('storage', {
            key,
            newValue,
            oldValue,
            storageArea: this.localStorage,
            url: this.windowRef.location.href,
        });

        this.windowRef.dispatchEvent(event);
    }
}

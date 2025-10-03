/* eslint-disable @typescript-eslint/no-unnecessary-condition,@typescript-eslint/no-unnecessary-type-conversion */

// TODO: Drop change to Document in v5
export function isSafari({ownerDocument: doc}: Element): boolean {
    const win = doc?.defaultView as unknown as Window & {safari?: any};

    const isMacOsSafari =
        win.safari !== undefined &&
        win.safari?.pushNotification?.toString() === '[object SafariRemoteNotification]';

    const isIosSafari =
        !!win.navigator?.vendor?.includes('Apple') &&
        !win.navigator?.userAgent?.includes('CriOS') &&
        !win.navigator?.userAgent?.includes('FxiOS');

    return isMacOsSafari || isIosSafari;
}

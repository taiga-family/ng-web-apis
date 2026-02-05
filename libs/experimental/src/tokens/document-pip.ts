import {inject, InjectionToken} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

interface DocumentPictureInPicture extends EventTarget {
    requestWindow(options?: DocumentPictureInPictureOptions): Promise<Window>;
    readonly window: Window | null;
    onenter:
        | ((this: DocumentPictureInPicture, ev: DocumentPictureInPictureEvent) => any)
        | null;
}

interface ModernWindow extends Window {
    readonly documentPictureInPicture?: DocumentPictureInPicture;
}

interface DocumentPictureInPictureOptions {
    width?: number;
    height?: number;
    disallowReturnToOpener?: boolean;
    preferInitialWindowPlacement?: boolean;
}

interface DocumentPictureInPictureEvent extends Event {
    readonly window: Window;
}

export const WA_DOCUMENT_PIP = new InjectionToken<DocumentPictureInPicture | null>(
    '[WA_DOCUMENT_PIP]',
    {factory: () => inject<ModernWindow>(WA_WINDOW).documentPictureInPicture ?? null},
);

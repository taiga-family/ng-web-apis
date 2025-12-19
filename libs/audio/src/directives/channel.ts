import {Directive, inject, type OnDestroy} from '@angular/core';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';

@Directive({
    selector: '[waChannel]',
    exportAs: 'AudioNode',
})
export class WaChannel extends GainNode implements OnDestroy {
    constructor() {
        super(inject(WA_AUDIO_CONTEXT));
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }
}

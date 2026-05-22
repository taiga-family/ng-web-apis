import {
    booleanAttribute,
    Directive,
    inject,
    input,
    type OnDestroy,
    type OnInit,
    output,
} from '@angular/core';

import {WA_AUDIO_NODE} from '../tokens/audio-node';

@Directive()
export class WaScheduledSource implements OnInit, OnDestroy {
    private readonly node = inject<AudioScheduledSourceNode>(WA_AUDIO_NODE, {self: true});

    public readonly autoplay = input(false, {transform: booleanAttribute});
    public readonly ended = output();

    public ngOnInit(): void {
        this.node.onended = (): void => this.ended.emit();

        if (this.autoplay()) {
            this.node.start();
        }
    }

    public ngOnDestroy(): void {
        try {
            this.node.stop();
        } catch {
            // noop
        }

        this.node.disconnect();
    }
}

@Directive({
    hostDirectives: [
        {
            directive: WaScheduledSource,
            inputs: ['autoplay'],
            outputs: ['ended'],
        },
    ],
})
export class WaSource {}

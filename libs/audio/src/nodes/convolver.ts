import {Directive, inject, Input, OnDestroy} from '@angular/core';
import {of, Subject, switchMap} from 'rxjs';

import {AudioBufferService} from '../services/audio-buffer.service';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode, AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: '[waConvolverNode]',
    inputs: ['normalize', 'channelCount', 'channelCountMode', 'channelInterpretation'],
    providers: [asAudioNode(WebAudioConvolver)],
    exportAs: 'AudioNode',
})
export class WebAudioConvolver extends ConvolverNode implements OnDestroy {
    @Input('buffer')
    set bufferSetter(source: AudioBuffer | string | null) {
        this.buffer$.next(source);
    }

    buffer$!: Subject<AudioBuffer | string | null>;

    constructor() {
        const audioBufferService = inject(AudioBufferService);
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE, {skipSelf: true});
        const modern = inject(CONSTRUCTOR_SUPPORT);

        if (modern) {
            super(context);
            WebAudioConvolver.init(this, node, audioBufferService);
        } else {
            const result = context.createConvolver() as WebAudioConvolver;

            Object.setPrototypeOf(result, WebAudioConvolver.prototype);
            WebAudioConvolver.init(result, node, audioBufferService);

            return result;
        }
    }

    static init(
        that: WebAudioConvolver,
        node: AudioNode | null,
        audioBufferService: AudioBufferService,
    ): void {
        connect(node, that);
        that.buffer$ = new Subject<AudioBuffer | string | null>();
        that.buffer$
            .pipe(
                // eslint-disable-next-line @typescript-eslint/promise-function-async
                switchMap(source =>
                    typeof source === 'string'
                        ? audioBufferService.fetch(source)
                        : of(source),
                ),
            )
            .subscribe(buffer => {
                that.buffer = buffer;
            });
    }

    ngOnDestroy(): void {
        this.buffer$.complete();
        this.disconnect();
    }
}

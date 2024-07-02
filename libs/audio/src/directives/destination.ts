import type {OnDestroy} from '@angular/core';
import {Directive, inject, Output} from '@angular/core';
import type {Observable} from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    interval,
    map,
    skipWhile,
    tap,
} from 'rxjs';

import {POLLING_TIME} from '../constants/polling-time';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: '[waAudioDestinationNode]',
    exportAs: 'AudioNode',
})
export class WebAudioDestination extends AnalyserNode implements OnDestroy {
    @Output()
    public quiet!: Observable<unknown>;

    constructor() {
        const context = inject(AUDIO_CONTEXT);
        const node = inject(AUDIO_NODE);
        const modern = inject(CONSTRUCTOR_SUPPORT);

        if (modern) {
            super(context);
            WebAudioDestination.init(this, node);
        } else {
            const result = context.createAnalyser() as WebAudioDestination;

            Object.setPrototypeOf(result, WebAudioDestination.prototype);
            WebAudioDestination.init(result, node);

            return result;
        }
    }

    protected static init(that: WebAudioDestination, node: AudioNode | null): void {
        connect(node, that);
        that.fftSize = 256;
        that.connect(that.context.destination);
        that.quiet = interval(POLLING_TIME).pipe(
            map(() => new Float32Array(that.fftSize)),
            tap((array) => that.getFloatTimeDomainData(array)),
            map((array) => that.isSilent(array)),
            distinctUntilChanged(),
            skipWhile((isSilent) => isSilent),
            debounceTime(5000),
            filter((isSilent) => isSilent),
        );
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }

    private isSilent(array: Float32Array): boolean {
        return Math.abs(array.reduce((acc, cur) => acc + cur, 0)) < 0.001;
    }
}

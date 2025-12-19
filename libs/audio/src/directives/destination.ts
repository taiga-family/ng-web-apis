import {Directive, inject, type OnDestroy} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    interval,
    map,
    skipWhile,
    tap,
} from 'rxjs';

import {WA_AUDIO_CONTEXT} from '../tokens/audio-context';
import {WA_AUDIO_NODE} from '../tokens/audio-node';
import {connect} from '../utils/connect';

@Directive({
    selector: '[waAudioDestinationNode]',
    exportAs: 'AudioNode',
})
export class WaDestination extends AnalyserNode implements OnDestroy {
    public readonly quiet = outputFromObservable<unknown>(
        interval(100).pipe(
            map(() => new Float32Array(this.fftSize)),
            tap((array) => this.getFloatTimeDomainData(array)),
            map((array) => this.isSilent(array)),
            distinctUntilChanged(),
            skipWhile((isSilent) => isSilent),
            debounceTime(5000),
            filter((isSilent) => isSilent),
        ),
    );

    constructor() {
        super(inject(WA_AUDIO_CONTEXT), {fftSize: 256});

        connect(inject(WA_AUDIO_NODE), this);
        this.connect(this.context.destination);
    }

    public ngOnDestroy(): void {
        this.disconnect();
    }

    private isSilent(array: Float32Array): boolean {
        return Math.abs(array.reduce((acc, cur) => acc + cur, 0)) < 0.001;
    }
}

import type {OnChanges} from '@angular/core';
import {Directive, EventEmitter, inject, Input, Output} from '@angular/core';
import {SPEECH_SYNTHESIS} from '@ng-web-apis/common';

@Directive({
    standalone: true,
    selector: '[waTextToSpeech]',
})
export class WaTextToSpeech implements OnChanges {
    private readonly speechSynthesisRef = inject(SPEECH_SYNTHESIS);

    @Input('waTextToSpeechPaused')
    public paused = false;

    @Output('waTextToSpeechError')
    public readonly onerror = new EventEmitter<SpeechSynthesisErrorEvent>();

    @Output('waTextToSpeechEnd')
    public readonly onend = new EventEmitter<SpeechSynthesisEvent>();

    @Output('waTextToSpeechMark')
    public readonly onmark = new EventEmitter<SpeechSynthesisEvent>();

    @Output('waTextToSpeechBoundary')
    public readonly onboundary = new EventEmitter<SpeechSynthesisEvent>();

    @Input()
    public set waTextToSpeech(utterance: SpeechSynthesisUtterance) {
        this.speechSynthesisRef.cancel();
        this.speechSynthesisRef.pause();

        utterance.onerror = (e) => this.onerror.emit(e);
        utterance.onend = (e) => this.onend.emit(e);
        utterance.onmark = (e) => this.onmark.emit(e);
        utterance.onboundary = (e) => this.onboundary.emit(e);

        this.speechSynthesisRef.speak(utterance);
    }

    public ngOnChanges(): void {
        if (this.paused) {
            this.speechSynthesisRef.pause();
        } else {
            this.speechSynthesisRef.resume();
        }
    }
}

/**
 * @deprecated: use {@link WaTextToSpeech}
 */
export const TextToSpeechDirective = WaTextToSpeech;

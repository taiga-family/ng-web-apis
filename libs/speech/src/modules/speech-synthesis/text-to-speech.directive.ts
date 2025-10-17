import {Directive, inject, input, type OnChanges, output} from '@angular/core';
import {SPEECH_SYNTHESIS} from '@ng-web-apis/common';

@Directive({
    standalone: true,
    selector: '[waTextToSpeech]',
})
export class WaTextToSpeech implements OnChanges {
    private readonly speechSynthesisRef = inject(SPEECH_SYNTHESIS);

    public readonly paused = input(false, {alias: 'waTextToSpeechPaused'});

    public readonly onerror = output<SpeechSynthesisErrorEvent>({
        alias: 'waTextToSpeechError',
    });

    public readonly onend = output<SpeechSynthesisEvent>({alias: 'waTextToSpeechEnd'});

    public readonly onmark = output<SpeechSynthesisEvent>({alias: 'waTextToSpeechMark'});

    public readonly onboundary = output<SpeechSynthesisEvent>({
        alias: 'waTextToSpeechBoundary',
    });

    public readonly waTextToSpeech = input(undefined, {
        transform: (utterance: SpeechSynthesisUtterance) => {
            this.speechSynthesisRef.cancel();
            this.speechSynthesisRef.pause();

            utterance.onerror = (e) => this.onerror.emit(e);
            utterance.onend = (e) => this.onend.emit(e);
            utterance.onmark = (e) => this.onmark.emit(e);
            utterance.onboundary = (e) => this.onboundary.emit(e);

            this.speechSynthesisRef.speak(utterance);

            return utterance;
        },
    });

    public ngOnChanges(): void {
        if (this.paused()) {
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

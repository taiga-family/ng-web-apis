import {Directive, inject, input, type OnChanges, output} from '@angular/core';
import {WA_SPEECH_SYNTHESIS} from '@ng-web-apis/common';

@Directive({
    selector: '[waTextToSpeech]',
    inputs: ['waTextToSpeech'],
})
export class WaTextToSpeech implements OnChanges {
    private readonly speechSynthesisRef = inject(WA_SPEECH_SYNTHESIS);

    public paused = input(false, {alias: 'waTextToSpeechPaused'});
    public readonly onend = output<SpeechSynthesisEvent>({alias: 'waTextToSpeechEnd'});
    public readonly onmark = output<SpeechSynthesisEvent>({alias: 'waTextToSpeechMark'});
    public readonly onerror = output<SpeechSynthesisErrorEvent>({
        alias: 'waTextToSpeechError',
    });

    public readonly onboundary = output<SpeechSynthesisEvent>({
        alias: 'waTextToSpeechBoundary',
    });

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
        if (this.paused()) {
            this.speechSynthesisRef.pause();
        } else {
            this.speechSynthesisRef.resume();
        }
    }
}

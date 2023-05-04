import {ChangeDetectionStrategy, Component, Inject, PLATFORM_ID} from '@angular/core';
import {
    continuous,
    isSaid,
    skipUntilSaid,
    SPEECH_SYNTHESIS_VOICES,
    SpeechRecognitionService,
    SpeechSynthesisUtteranceOptions,
    takeUntilSaid,
} from '@ng-web-apis/speech';
import {TuiContextWithImplicit, tuiPure} from '@taiga-ui/cdk';
import {merge, Observable, repeat, retry} from 'rxjs';
import {filter, mapTo, share} from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';

@Component({
    selector: `speech-page`,
    templateUrl: `./speech-page.component.html`,
    styleUrls: [`./speech-page.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeechPageComponent {
    readonly isBrowser = isPlatformBrowser(this.platformId);
    paused = true;

    voice = null;

    text = 'Hit play/pause to speak this text';

    readonly nameExtractor = ({
        $implicit,
    }: TuiContextWithImplicit<SpeechSynthesisVoice>) => $implicit.name;

    constructor(
        @Inject(PLATFORM_ID) readonly platformId: Record<any, any>,
        @Inject(SPEECH_SYNTHESIS_VOICES)
        readonly voices$: Observable<readonly SpeechSynthesisVoice[]>,
        @Inject(SpeechRecognitionService)
        private readonly recognition$: Observable<SpeechRecognitionResult[]>,
    ) {}

    @tuiPure
    get record$(): Observable<SpeechRecognitionResult[]> {
        return this.result$.pipe(
            skipUntilSaid('Okay Angular'),
            takeUntilSaid('Thank you Angular'),
            repeat(),
            continuous(),
        );
    }

    @tuiPure
    get open$(): Observable<boolean> {
        return merge(
            this.result$.pipe(filter(isSaid('Show sidebar')), mapTo(true)),
            this.result$.pipe(filter(isSaid('Hide sidebar')), mapTo(false)),
        );
    }

    get options(): SpeechSynthesisUtteranceOptions {
        return this.getOptions(this.voice);
    }

    @tuiPure
    private get result$(): Observable<SpeechRecognitionResult[]> {
        return this.recognition$.pipe(retry(), repeat(), share());
    }

    voiceByName(_: number, {name}: SpeechSynthesisVoice): string {
        return name;
    }

    onClick() {
        this.paused = !this.paused;
        // Re-trigger utterance pipe:
        this.text = this.paused ? `${this.text} ` : this.text;
    }

    onEnd() {
        console.info('Speech synthesis ended');
    }

    @tuiPure
    private getOptions(
        voice: SpeechSynthesisVoice | null,
    ): SpeechSynthesisUtteranceOptions {
        return {
            lang: 'en-US',
            voice,
        };
    }
}

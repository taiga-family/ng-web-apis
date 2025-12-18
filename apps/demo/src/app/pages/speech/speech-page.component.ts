import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    continuous,
    isSaid,
    skipUntilSaid,
    type SpeechSynthesisUtteranceOptions,
    takeUntilSaid,
    WA_SPEECH_SYNTHESIS_VOICES,
    WaSpeechRecognitionService,
    WaSpeechUtterancePipe,
    WaTextToSpeech,
} from '@ng-web-apis/speech';
import {TuiSidebar} from '@taiga-ui/addon-mobile';
import {type TuiContext, tuiPure} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiLabel} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextareaModule, TuiTooltipModule} from '@taiga-ui/legacy';
import {filter, map, merge, type Observable, repeat, retry, share} from 'rxjs';

@Component({
    selector: 'speech-page',
    imports: [
        CommonModule,
        FormsModule,
        TuiButton,
        TuiDataList,
        TuiLabel,
        TuiSelectModule,
        TuiSidebar,
        TuiTextareaModule,
        TuiTooltipModule,
        WaSpeechUtterancePipe,
        WaTextToSpeech,
    ],
    templateUrl: './speech-page.component.html',
    styleUrl: './speech-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeechPage {
    private readonly recognition$ = inject(WaSpeechRecognitionService);
    protected readonly platformId = inject(PLATFORM_ID);
    protected readonly voices$ = inject(WA_SPEECH_SYNTHESIS_VOICES);
    protected readonly isBrowser = isPlatformBrowser(this.platformId);
    protected paused = true;
    protected voice = null;
    protected text = 'Hit play/pause to speak this text';

    @tuiPure
    protected get record$(): Observable<SpeechRecognitionResult[]> {
        return this.result$.pipe(
            skipUntilSaid('Okay Angular'),
            takeUntilSaid('Thank you Angular'),
            repeat(),
            continuous(),
        );
    }

    @tuiPure
    protected get open$(): Observable<boolean> {
        return merge(
            this.result$.pipe(
                filter(isSaid('Show sidebar')),
                map(() => true),
            ),
            this.result$.pipe(
                filter(isSaid('Hide sidebar')),

                map(() => false),
            ),
        );
    }

    protected get options(): SpeechSynthesisUtteranceOptions {
        return this.getOptions(this.voice);
    }

    protected readonly nameExtractor = ({
        $implicit,
    }: TuiContext<SpeechSynthesisVoice>): string => $implicit.name;

    protected voiceByName(_: number, {name}: SpeechSynthesisVoice): string {
        return name;
    }

    protected onClick(): void {
        this.paused = !this.paused;
        // Re-trigger utterance pipe:
        this.text = this.paused ? `${this.text} ` : this.text;
    }

    protected onEnd(): void {
        console.info('Speech synthesis ended');
    }

    @tuiPure
    private get result$(): Observable<SpeechRecognitionResult[]> {
        return this.recognition$.pipe(retry(), repeat(), share());
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

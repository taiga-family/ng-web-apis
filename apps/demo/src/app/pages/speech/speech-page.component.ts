import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {SpeechSynthesisUtteranceOptions} from '@ng-web-apis/speech';
import {
    continuous,
    isSaid,
    skipUntilSaid,
    SPEECH_SYNTHESIS_VOICES,
    SpeechRecognitionService,
    takeUntilSaid,
    UtterancePipe,
    WaTextToSpeech,
} from '@ng-web-apis/speech';
import {TuiSidebar} from '@taiga-ui/addon-mobile';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiLet, tuiPure} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiLabel} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextareaModule, TuiTooltipModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {filter, map, merge, repeat, retry, share} from 'rxjs';

@Component({
    standalone: true,
    selector: 'speech-page',
    imports: [
        CommonModule,
        FormsModule,
        TuiButton,
        TuiDataList,
        TuiLabel,
        TuiLet,
        TuiSelectModule,
        TuiSidebar,
        TuiTextareaModule,
        TuiTooltipModule,
        UtterancePipe,
        WaTextToSpeech,
    ],
    templateUrl: './speech-page.component.html',
    styleUrls: ['./speech-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeechPage {
    private readonly recognition$ = inject(SpeechRecognitionService);
    protected readonly platformId = inject(PLATFORM_ID);
    protected readonly voices$ = inject(SPEECH_SYNTHESIS_VOICES);
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
                map(
                    // eslint-disable-next-line no-restricted-syntax
                    () => true,
                ),
            ),
            this.result$.pipe(
                filter(isSaid('Hide sidebar')),

                map(
                    // eslint-disable-next-line no-restricted-syntax
                    () => false,
                ),
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

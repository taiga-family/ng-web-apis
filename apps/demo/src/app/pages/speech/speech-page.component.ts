import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    continuous,
    isSaid,
    skipUntilSaid,
    SPEECH_SYNTHESIS_VOICES,
    SpeechRecognitionService,
    SpeechSynthesisModule,
    SpeechSynthesisUtteranceOptions,
    takeUntilSaid,
} from '@ng-web-apis/speech';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiContextWithImplicit, TuiLetModule, tuiPure} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiLabelModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextAreaModule} from '@taiga-ui/kit';
import {merge, Observable, repeat, retry} from 'rxjs';
import {filter, map, share} from 'rxjs/operators';

@Component({
    standalone: true,
    selector: 'speech-page',
    imports: [
        CommonModule,
        FormsModule,
        TuiLetModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiTextAreaModule,
        TuiButtonModule,
        TuiLabelModule,
        TuiTooltipModule,
        TuiSidebarModule,
        SpeechSynthesisModule,
    ],
    templateUrl: './speech-page.component.html',
    styleUrls: ['./speech-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeechPageComponent {
    readonly isBrowser = isPlatformBrowser(this.platformId);
    paused = true;

    voice = null;

    text = 'Hit play/pause to speak this text';

    constructor(
        @Inject(PLATFORM_ID) readonly platformId: Record<any, any>,
        @Inject(SPEECH_SYNTHESIS_VOICES)
        readonly voices$: Observable<readonly SpeechSynthesisVoice[]>,
        @Inject(SpeechRecognitionService)
        private readonly recognition$: Observable<SpeechRecognitionResult[]>,
    ) {}

    readonly nameExtractor = ({
        $implicit,
    }: TuiContextWithImplicit<SpeechSynthesisVoice>): string => $implicit.name;

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

    onClick(): void {
        this.paused = !this.paused;
        // Re-trigger utterance pipe:
        this.text = this.paused ? `${this.text} ` : this.text;
    }

    onEnd(): void {
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

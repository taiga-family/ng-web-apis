import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    continuous,
    isSaid,
    skipUntilSaid,
    takeUntilSaid,
    WA_SPEECH_SYNTHESIS_VOICES,
    WaSpeechRecognitionService,
    WaSpeechUtterancePipe,
    WaTextToSpeech,
} from '@ng-web-apis/speech';
import {TuiButton, TuiDataList, TuiIcon, TuiPopup, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDrawer,
    TuiSelect,
    TuiStringifyPipe,
    TuiTextarea,
    TuiTooltip,
} from '@taiga-ui/kit';
import {filter, map, merge, repeat, retry, share} from 'rxjs';

@Component({
    selector: 'speech-page',
    imports: [
        CommonModule,
        FormsModule,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDrawer,
        TuiIcon,
        TuiPopup,
        TuiSelect,
        TuiStringifyPipe,
        TuiTextarea,
        TuiTextfield,
        TuiTooltip,
        WaSpeechUtterancePipe,
        WaTextToSpeech,
    ],
    templateUrl: './speech-page.component.html',
    styleUrl: './speech-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeechPage {
    private readonly recognition$ = inject(WaSpeechRecognitionService);
    private readonly result$ = this.recognition$.pipe(retry(), repeat(), share());

    protected readonly platformId = inject(PLATFORM_ID);
    protected readonly voices$ = inject(WA_SPEECH_SYNTHESIS_VOICES);
    protected readonly isBrowser = isPlatformBrowser(this.platformId);
    protected paused = true;
    protected voice = null;
    protected text = 'Hit play/pause to speak this text';
    protected readonly record$ = this.result$.pipe(
        skipUntilSaid('OK Angular'),
        takeUntilSaid('Thank you Angular'),
        repeat(),
        continuous(),
    );

    protected readonly open$ = merge(
        this.result$.pipe(
            filter(isSaid('Show sidebar')),
            map(() => true),
        ),
        this.result$.pipe(
            filter(isSaid('Hide sidebar')),
            map(() => false),
        ),
    );

    protected onClick(): void {
        this.paused = !this.paused;
        // Re-trigger utterance pipe:
        this.text = this.paused ? `${this.text} ` : this.text;
    }

    protected onEnd(): void {
        console.info('Speech synthesis ended');
    }
}

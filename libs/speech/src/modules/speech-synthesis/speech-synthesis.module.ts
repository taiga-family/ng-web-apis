import {NgModule} from '@angular/core';
import {TextToSpeechDirective} from './text-to-speech.directive';
import {UtterancePipe} from './utterance.pipe';

@NgModule({
    declarations: [TextToSpeechDirective, UtterancePipe],
    exports: [TextToSpeechDirective, UtterancePipe],
})
export class SpeechSynthesisModule {}

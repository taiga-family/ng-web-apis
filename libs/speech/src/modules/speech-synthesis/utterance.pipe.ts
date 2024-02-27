import {Pipe, PipeTransform} from '@angular/core';

import {SpeechSynthesisUtteranceOptions} from '../../interfaces/speech-synthesis-utterance-options';

@Pipe({
    standalone: true,
    name: 'waUtterance',
})
export class UtterancePipe implements PipeTransform {
    public transform(
        text: string,
        {
            lang = '',
            pitch = 1,
            rate = 1,
            volume = 1,
            voice = null,
        }: SpeechSynthesisUtteranceOptions | undefined = {},
    ): SpeechSynthesisUtterance {
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.lang = lang;
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        utterance.voice = voice!; // Strange TS issue will not allow null here

        return utterance;
    }
}

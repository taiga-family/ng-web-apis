import {Pipe, type PipeTransform} from '@angular/core';

import {type SpeechSynthesisUtteranceOptions} from '../interfaces/speech-synthesis-utterance-options';

@Pipe({name: 'waUtterance'})
export class WaSpeechUtterancePipe implements PipeTransform {
    public transform(
        text: string,
        {
            lang = '',
            pitch = 1,
            rate = 1,
            volume = 1,
            voice = null,
        }: SpeechSynthesisUtteranceOptions = {},
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

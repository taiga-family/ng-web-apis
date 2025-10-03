import {filter, type MonoTypeOperatorFunction} from 'rxjs';

export function confidenceAbove(
    threshold: number,
): MonoTypeOperatorFunction<SpeechRecognitionAlternative> {
    return filter(({confidence}) => confidence > threshold);
}

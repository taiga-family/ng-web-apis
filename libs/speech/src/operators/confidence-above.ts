import type {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs';

export function confidenceAbove(
    threshold: number,
): MonoTypeOperatorFunction<SpeechRecognitionAlternative> {
    return filter(({confidence}) => confidence > threshold);
}

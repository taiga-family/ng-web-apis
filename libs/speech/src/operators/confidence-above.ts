import {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs/operators';

export function confidenceAbove(
    threshold: number,
): MonoTypeOperatorFunction<SpeechRecognitionAlternative> {
    return filter(({confidence}) => confidence > threshold);
}

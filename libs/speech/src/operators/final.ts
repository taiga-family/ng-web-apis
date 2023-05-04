import {MonoTypeOperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

export function final(): MonoTypeOperatorFunction<SpeechRecognitionResult[]> {
    return map(results => results.filter(({isFinal}) => isFinal));
}

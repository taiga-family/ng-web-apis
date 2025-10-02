import {map, type MonoTypeOperatorFunction} from 'rxjs';

export function final(): MonoTypeOperatorFunction<SpeechRecognitionResult[]> {
    return map((results) => results.filter(({isFinal}) => isFinal));
}

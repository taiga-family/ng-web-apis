import type {MonoTypeOperatorFunction} from 'rxjs';
import {map} from 'rxjs';

export function final(): MonoTypeOperatorFunction<SpeechRecognitionResult[]> {
    return map((results) => results.filter(({isFinal}) => isFinal));
}

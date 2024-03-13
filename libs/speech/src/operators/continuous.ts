import type {MonoTypeOperatorFunction} from 'rxjs';
import {scan} from 'rxjs';

export function continuous(): MonoTypeOperatorFunction<SpeechRecognitionResult[]> {
    return scan(
        (result: SpeechRecognitionResult[], current) => [
            ...result.filter(({isFinal}) => isFinal),
            ...current,
        ],
        [],
    );
}

import {MonoTypeOperatorFunction, scan} from 'rxjs';

export function continuous(): MonoTypeOperatorFunction<SpeechRecognitionResult[]> {
    return scan(
        (result: SpeechRecognitionResult[], current) => [
            ...result.filter(({isFinal}) => isFinal),
            ...current,
        ],
        [],
    );
}

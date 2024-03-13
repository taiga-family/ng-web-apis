import type {OperatorFunction} from 'rxjs';
import {map} from 'rxjs';

export function firstAlternative(): OperatorFunction<
    SpeechRecognitionResult[],
    SpeechRecognitionAlternative
> {
    return map(result => result[0][0]);
}

import {map, OperatorFunction} from 'rxjs';

export function firstAlternative(): OperatorFunction<
    SpeechRecognitionResult[],
    SpeechRecognitionAlternative
> {
    return map(result => result[0][0]);
}

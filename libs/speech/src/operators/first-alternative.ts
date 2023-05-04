import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

export function firstAlternative(): OperatorFunction<
    SpeechRecognitionResult[],
    SpeechRecognitionAlternative
> {
    return map(result => result[0][0]);
}

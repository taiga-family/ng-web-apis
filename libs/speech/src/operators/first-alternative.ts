import {map, type OperatorFunction} from 'rxjs';

export function firstAlternative(): OperatorFunction<
    SpeechRecognitionResult[],
    SpeechRecognitionAlternative
> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    return map((result) => result[0]?.[0]!);
}

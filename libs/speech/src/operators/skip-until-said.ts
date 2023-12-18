import {map, MonoTypeOperatorFunction, pipe, skipWhile} from 'rxjs';

import {isSaid} from '../utils/is-said';

export function skipUntilSaid(
    text: string,
): MonoTypeOperatorFunction<SpeechRecognitionResult[]> {
    const predicate = isSaid(text);

    return pipe(
        skipWhile(results => !predicate(results)),
        map((value, index) => (index ? value : [])),
    );
}

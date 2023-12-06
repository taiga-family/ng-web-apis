import {MonoTypeOperatorFunction, pipe} from 'rxjs';
import {map, skipWhile} from 'rxjs/operators';

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

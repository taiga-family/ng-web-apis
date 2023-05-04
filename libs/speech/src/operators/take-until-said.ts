import {MonoTypeOperatorFunction} from 'rxjs';
import {takeWhile} from 'rxjs/operators';
import {isSaid} from '../utils/is-said';

export function takeUntilSaid(
    text: string,
): MonoTypeOperatorFunction<SpeechRecognitionResult[]> {
    const predicate = isSaid(text);

    return takeWhile(results => !predicate(results));
}

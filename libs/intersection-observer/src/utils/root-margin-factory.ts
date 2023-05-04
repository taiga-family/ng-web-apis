import {INTERSECTION_ROOT_MARGIN_DEFAULT} from '../tokens/intersection-root-margin';

export function rootMarginFactory(rootMargin: string | null): string {
    return rootMargin || INTERSECTION_ROOT_MARGIN_DEFAULT;
}

import {INTERSECTION_THRESHOLD_DEFAULT} from '../tokens/intersection-threshold';

export function thresholdFactory(threshold: string | null): number | number[] {
    return threshold?.split(',').map(parseFloat) || INTERSECTION_THRESHOLD_DEFAULT;
}

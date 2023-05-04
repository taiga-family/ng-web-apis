export function latencyHintFactory(
    latencyHint: AudioContextLatencyCategory | null,
): AudioContextLatencyCategory | number | undefined {
    return latencyHint === null
        ? undefined
        : Number.parseFloat(latencyHint) || latencyHint;
}

export function isError(item: unknown): item is Error | DOMException {
    return item instanceof Error || item instanceof DOMException;
}

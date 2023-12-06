export function isError(item: unknown): item is DOMException | Error {
    return item instanceof Error || item instanceof DOMException;
}

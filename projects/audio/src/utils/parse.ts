export function parse(value: string | null, fallback: number): number {
    const parsed = parseFloat(value || '');

    return isNaN(parsed) ? fallback : parsed;
}

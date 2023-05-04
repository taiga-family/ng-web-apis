export function booleanAttribute(element: Element, attribute: string): true | undefined {
    return element.getAttribute(attribute) !== null || undefined;
}

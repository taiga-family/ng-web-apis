export class DOMStringListMock extends Array<string> implements DOMStringList {
    contains(): boolean {
        return false;
    }

    item(): null {
        return null;
    }
}

export class DOMStringListMock extends Array<string> implements DOMStringList {
    public contains(): boolean {
        return false;
    }

    public item(): null {
        return null;
    }
}

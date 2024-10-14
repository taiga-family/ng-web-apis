import {isEdge, isFirefox, isSafari} from '@ng-web-apis/platform';

window.onbeforeunload = jasmine.createSpy();

describe('Browsers', () => {
    it('isEdge', () => {
        expect(isEdge('edge')).toBe(true);
    });

    it('isFirefox', () => {
        expect(isFirefox('firefox')).toBe(true);
        expect(isFirefox('Firefox')).toBe(true);
    });

    describe('isSafari', () => {
        it('detect by SafariRemoteNotification', () => {
            expect(
                isSafari({
                    ownerDocument: {
                        defaultView: {
                            safari: {
                                pushNotification: new (class {
                                    public toString(): string {
                                        return '[object SafariRemoteNotification]';
                                    }
                                })(),
                            },
                        },
                    },
                } as unknown as Element),
            ).toBe(true);

            expect(
                isSafari({
                    ownerDocument: {
                        defaultView: {navigator: {}},
                    },
                } as unknown as Element),
            ).toBe(false);
        });

        it('detect by vendor', () => {
            expect(
                isSafari({
                    ownerDocument: {
                        defaultView: {
                            navigator: {
                                vendor: 'Apple Computer, Inc.',
                                userAgent:
                                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
                            },
                        },
                    },
                } as unknown as Element),
            ).toBe(true);

            expect(
                isSafari({
                    ownerDocument: {
                        defaultView: {
                            navigator: {
                                vendor: 'Google Inc.',
                                userAgent:
                                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                            },
                        },
                    },
                } as unknown as Element),
            ).toBe(false);
        });
    });
});

// cspell:ignore CriOS FxiOS EdgiOS EdgA Trident

import {parseBrowser} from '@ng-web-apis/platform';

describe('parseBrowser', () => {
    it('parses Chrome', () => {
        const userAgent =
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'chrome',
            version: '140.0.0.0',
        });
    });

    it('parses Chrome on iOS', () => {
        const userAgent =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/140.0.7339.53 Mobile/15E148 Safari/604.1';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'chrome',
            version: '140.0.7339.53',
        });
    });

    it('parses Edge', () => {
        const userAgent =
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.3485.81';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'edge',
            version: '140.0.3485.81',
        });
    });

    it('parses Edge on iOS', () => {
        const userAgent =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/140.0.3485.81 Mobile/15E148 Safari/605.1.15';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'edge',
            version: '140.0.3485.81',
        });
    });

    it('parses Edge on Android', () => {
        const userAgent =
            'Mozilla/5.0 (Linux; Android 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 EdgA/140.0.3485.81';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'edge',
            version: '140.0.3485.81',
        });
    });

    it('parses Firefox', () => {
        const userAgent =
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:142.0) Gecko/20100101 Firefox/142.0';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'firefox',
            version: '142.0',
        });
    });

    it('parses Firefox on iOS', () => {
        const userAgent =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/142.0 Mobile/15E148 Safari/605.1.15';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'firefox',
            version: '142.0',
        });
    });

    it('parses Safari', () => {
        const userAgent =
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'safari',
            version: '18.6',
        });
    });

    it('parses Safari on iOS', () => {
        const userAgent =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'safari',
            version: '18.6',
        });
    });

    it('parses Internet Explorer 11', () => {
        const userAgent =
            'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'internet-explorer',
            version: '11.0',
        });
    });

    it('parses Internet Explorer 10', () => {
        const userAgent =
            'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';

        expect(parseBrowser(userAgent)).toEqual({
            name: 'internet-explorer',
            version: '10.0',
        });
    });

    it('returns unknown browser', () => {
        expect(parseBrowser('curl/8.7.1')).toEqual({
            name: 'unknown',
            version: null,
        });
    });
});

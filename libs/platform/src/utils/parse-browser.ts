// cspell:ignore EdgA EdgiOS FxiOS CriOS Trident

export type BrowserName =
    | 'chrome'
    | 'edge'
    | 'firefox'
    | 'internet-explorer'
    | 'safari'
    | 'unknown';

export interface BrowserInfo {
    readonly name: BrowserName;
    readonly version: string | null;
}

interface BrowserPattern {
    readonly name: Exclude<BrowserName, 'unknown'>;
    readonly pattern: RegExp;
    readonly version: RegExp;
}

const BROWSERS: readonly BrowserPattern[] = [
    {
        name: 'edge',
        pattern: /(?:EdgA|EdgiOS|Edg)\//,
        version: /(?:EdgA|EdgiOS|Edg)\/([\d.]+)/,
    },
    {
        name: 'firefox',
        pattern: /(?:Firefox|FxiOS)\//,
        version: /(?:Firefox|FxiOS)\/([\d.]+)/,
    },
    {
        name: 'chrome',
        pattern: /(?:Chrome|CriOS)\//,
        version: /(?:Chrome|CriOS)\/([\d.]+)/,
    },
    {
        name: 'safari',
        pattern: /Safari\//,
        version: /Version\/([\d.]+)/,
    },
    {
        name: 'internet-explorer',
        pattern: /(?:MSIE |Trident\/)/,
        version: /(?:MSIE |rv:)([\d.]+)/,
    },
];

export function parseBrowser(userAgent: string): BrowserInfo {
    const browser = BROWSERS.find(({pattern}) => pattern.test(userAgent));

    if (!browser) {
        return {name: 'unknown', version: null};
    }

    return {
        name: browser.name,
        version: browser.version.exec(userAgent)?.[1] ?? null,
    };
}

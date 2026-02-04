/// <reference lib="es2021" />
import {readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

/**
 * This script is required for correct of `nx prerender demo` command.
 * `@nguniversal/builders:prerender` (version 12) can't extract routes for lazy-loading modules.
 * See: https://github.com/angular/universal/issues/1769
 * ___
 * TODO: after update to the newer version of Angular and `@nguniversal/builders`, check if this script is still required.
 */
(function main(): void {
    const demoPathEnumContent = readFileSync(
        join(process.cwd(), 'apps', 'demo', 'src', 'app', 'constants', 'demo-path.ts'),
        'utf-8',
    );
    const routes =
        demoPathEnumContent
            .match(/['"`].*['"`]/g)
            ?.map((route) => route.replaceAll(/['"`]/g, '')) || [];

    console.info('Generated routes:');
    routes.forEach((route) => console.info(`* ${route}`));

    writeFileSync(
        join(process.cwd(), 'apps', 'demo', 'routesFile.txt'),
        routes.join('\n') || '',
    );
})();

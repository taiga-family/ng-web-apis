import {readFileSync, writeFileSync} from 'node:fs';

import {glob} from 'glob';

const INDENTATION = 4;

interface BumpDepsOptions {
    deps: Record<string, Record<string, unknown> | string>;
    ignores: readonly string[];
    isPeerDependency?: boolean;
    newVersion: string;
    prevVersion: string;
}

export function syncVersions(
    filesOrDirectories: string[],
    newVersion: string,
    ignores: readonly string[] = [],
): void {
    const patterns = filesOrDirectories.map((pattern) =>
        pattern.endsWith('.json')
            ? pattern
            : `${pattern}/**/*(package.json|package-lock.json)`,
    );

    const files = patterns
        .map((pattern) => glob.sync(pattern, {ignore: '**/node_modules/**'}))
        .flatMap((files) => files)
        .filter((file) => !file.includes('node_modules'));

    for (const file of files) {
        const originalJSON = JSON.stringify(
            JSON.parse(readFileSync(file).toString()),
            null,
            INDENTATION,
        );
        const packageJson = JSON.parse(originalJSON);
        const prevVersion = packageJson.version;

        if (!prevVersion) {
            continue;
        }

        updatePackageJsonStructure({
            isPackageLockFile: file.endsWith('-lock.json'),
            packageJson,
            prevVersion,
            newVersion,
            ignores,
        });

        const updatedJSON = JSON.stringify(packageJson, null, 4);

        if (originalJSON !== updatedJSON) {
            writeFileSync(file, `${updatedJSON}\n`);
            console.info(`[synchronized]: ${file}`);
        } else {
            console.info(`[no changes]: ${file}`);
        }
    }
}

export function bumpDeps({
    deps,
    prevVersion,
    newVersion,
    isPeerDependency,
    ignores,
}: BumpDepsOptions): void {
    Object.keys(deps)
        .filter((key) => isPackageName(key, ignores))
        .forEach((key) => {
            if (typeof deps[key] === 'string') {
                deps[key] = isPeerDependency
                    ? (deps[key] as string)?.replace(prevVersion, newVersion)
                    : `^${newVersion}`;
            } else if (deps[key]?.hasOwnProperty('requires')) {
                bumpDeps({
                    deps:
                        (deps[key] as Record<string, Record<string, string>>)?.requires ??
                        {},
                    isPeerDependency,
                    ignores,
                    prevVersion,
                    newVersion,
                });
            }
        });
}

export function isPackageName(name = '', ignores: readonly string[] = []): boolean {
    return (
        (name?.startsWith('@ng-web-apis/') || name === 'ng-web-apis') &&
        !ignores.includes(name)
    );
}

interface UpdatePackageJsonOptions {
    ignores: readonly string[];
    isPackageLockFile: boolean;
    newVersion: string;
    packageJson: Record<string, Record<string, any> | string>;
    prevVersion: string;
}

export function updatePackageJsonStructure({
    packageJson,
    isPackageLockFile,
    ignores,
    prevVersion,
    newVersion,
}: UpdatePackageJsonOptions): void {
    const {name, dependencies, peerDependencies, devDependencies, packages} = packageJson;

    if (typeof name === 'string' && isPackageName(name, ignores)) {
        if ('version' in packageJson && typeof packageJson['version'] === 'string') {
            packageJson['version'] = newVersion;
        }
    }

    if (isObject(dependencies)) {
        bumpDeps({deps: dependencies, prevVersion, newVersion, ignores});
    }

    if (isObject(peerDependencies)) {
        bumpDeps({
            deps: peerDependencies,
            prevVersion,
            newVersion,
            isPeerDependency: true,
            ignores,
        });
    }

    if (isObject(devDependencies)) {
        bumpDeps({deps: devDependencies, prevVersion, newVersion, ignores});
    }

    if (isPackageLockFile && isObject(packages)) {
        for (const packageLockJson of Object.values(packages)) {
            if (!isPackageName(packageLockJson?.name, ignores)) {
                continue;
            }

            updatePackageJsonStructure({
                packageJson: packageLockJson,
                prevVersion,
                newVersion,
                isPackageLockFile: true,
                ignores,
            });
        }
    }
}

function isObject<T extends Record<string, any>>(
    value: unknown,
): value is NonNullable<T> {
    return typeof value === 'object' && !!value;
}

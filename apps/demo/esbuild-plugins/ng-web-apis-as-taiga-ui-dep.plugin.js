const {resolve, join} = require('node:path');
const {existsSync} = require('node:fs');

module.exports = {
    name: 'ng-web-apis-as-taiga-ui-dep',
    setup(build) {
        build.onResolve({filter: /^@ng-web-apis\//}, (args) => {
            if (!args.importer.includes(join('node_modules', '@taiga-ui'))) {
                return;
            }

            const library = args.path.split('/')[1];
            const entryPoint = resolve(
                __dirname,
                '../../../libs',
                library,
                'src/index.ts',
            );

            return existsSync(entryPoint) ? {path: entryPoint} : null;
        });
    },
};

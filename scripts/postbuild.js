const fs = require('fs');

const DIST_LIB_PATH = 'dist/common/';
const README_PATH = 'README.md';
const LOGO_PATH = 'logo.svg';
const PATH_TO_README = DIST_LIB_PATH + README_PATH;
const PATH_TO_LOGO = DIST_LIB_PATH + LOGO_PATH;

copyExtraFiles();

function copyExtraFiles() {
    if (!fs.existsSync(README_PATH) || !fs.existsSync(LOGO_PATH)) {
        throw new Error('Requested files do not exit');
    } else {
        fs.copyFileSync(README_PATH, PATH_TO_README);
        fs.copyFileSync(LOGO_PATH, PATH_TO_LOGO);
    }
}

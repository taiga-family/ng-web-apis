import {copyFile} from 'node:fs/promises';

await copyFile('LICENSE', `dist/${process.argv[2]}/LICENSE`);

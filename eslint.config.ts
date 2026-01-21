import taiga from '@taiga-ui/eslint-plugin-experience-next';
import {globalIgnores} from 'eslint/config';

export default [
    ...taiga.configs.recommended,
    globalIgnores(['*.js', '**/*.js']),
    {
        files: ['**/*.spec.ts'],
        rules: {
            'jest/no-jasmine-globals': 'off',
            'jest/no-test-prefixes': 'off',
            'rxjs/no-ignored-observable': 'off',
            'rxjs/no-topromise': 'off',
        },
    },
    {
        files: ['**/*.ts'],
        rules: {
            // TODO: fix later
            '@angular-eslint/prefer-inject': 'off',
            '@angular-eslint/prefer-signals': 'off',
            '@angular-eslint/prefer-output-readonly': 'off',
            '@angular-eslint/no-attribute-decorator': 'off',
            '@typescript-eslint/prefer-promise-reject-errors': 'off',
        },
    },
    {
        files: ['**/*.md'],
        rules: {'markdown/heading-increment': 'off'},
    },
];

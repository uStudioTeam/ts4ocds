const { resolve } = require('path');
const tsconfig = require('./tsconfig.json');

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'sonarjs', 'unicorn', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    sourceType: 'module',
  },
  ignorePatterns: ['lib/**/*', 'node_modules/**/*'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: resolve(__dirname, 'tsconfig.json'),
      },
      alias: {
        extensions: ['.ts', '.tsx'],
        map: Object.keys(tsconfig.compilerOptions.paths).reduce((map, key) => {
          return [...map, [key, tsconfig.compilerOptions.paths[key][0]].map((path) => path.replace(/\/\*/u, ''))];
        }, []),
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/generic-type-naming': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
          object: false,
        },
      },
    ],

    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'error',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',

    'prettier/prettier': 'warn',

    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/no-reduce': 'off',

    'sonarjs/no-duplicate-string': 'warn',

    'no-process-env': 'off',
    'id-length': ['warn', { exceptions: ['_'] }],
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'sort-imports': 'off',
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'global-require': 'off',
    'consistent-return': 'warn',
  },
};

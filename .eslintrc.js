module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb-typescript', // Uses the recommended rules from @airbnb-typescript
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Align prettier settings with eslint
    'plugin:react-hooks/recommended',
    'prettier',
    'next/core-web-vitals',
  ],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/no-implied-eval': 0,
    '@typescript-eslint/no-throw-literal': 0,
    'no-console': [1, { allow: ['warn', 'error'] }],
    'react/jsx-sort-props': 1,
    'react/display-name': 0,
    'eol-last': ['error', 'always'],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: 'enumMember',
        format: ['StrictPascalCase'],
      },
    ],
    'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts', 'tsx'] }],
    '@typescript-eslint/no-unused-expressions': [2, { allowShortCircuit: true }],
    '@typescript-eslint/explicit-function-return-type': [0], // Disabled to improve code readability. No needed during writting React elements
    '@typescript-eslint/indent': [0], // Disabled because prettier will handle this rule
    'react/state-in-constructor': [0], // Disabled because we want to allow to write elements with and without constructor
    'react/button-has-type': [0], // Disabled because it not work well with TypeScript
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-one-expression-per-line': [0], // Disabled because of prettier rules
    'react/jsx-props-no-spreading': [0],
    'react/jsx-fragments': [0], // Disabled for better code readability
    'jsx-a11y/click-events-have-key-events': [0], // Disabled (https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)
    'jsx-a11y/no-static-element-interactions': [1], // As a warning (https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md)
    'jsx-a11y/label-has-associated-control': [0],
    'react/jsx-curly-newline': 0,
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        paths: ['src'], // Resolve absolute path to modules
      },
    },
  },
  overrides: [
    {
      files: ['src/**/*.{js,ts,tsx}'],
      excludedFiles: ['src/**/*.test.{ts,tsx,js}'],
    },
  ],
};

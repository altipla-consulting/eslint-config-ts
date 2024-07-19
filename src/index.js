
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['*.css'],

  // Some of the rules have Typescript equivalents that should be used instead.
  // To check whether a replacement exists or not go to this page:
  //   https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#supported-rules
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['off'],

    'linebreak-style': ['error', 'unix'],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    'eol-last': 'error',
    'key-spacing': 'error',

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

    'space-before-blocks': 'error',
    'space-infix-ops': 'error',

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'curly': 'error',

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    'spaced-comment': ['error', 'always'],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],

    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    'function-paren-newline': ['error', 'consistent'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    
    // Typescript compiler already checks this type of errors.
    'no-undef': 'off',
    
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_', argsIgnorePattern: '_' }],

    'prefer-const': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    'no-var': 'error',

    '@typescript-eslint/no-non-null-assertion': 'off',

    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { arguments: false } }],
    
    'no-confusing-arrow': ['error', { allowParens: false }],
  },
  plugins: [
    '@typescript-eslint',
  ],
}

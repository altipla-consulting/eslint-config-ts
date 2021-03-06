
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
  ignorePatterns: ['*.css', '/*.*'],

  // Some of the rules have Typescript equivalents that should be used instead.
  // To check whether a replacement exists or not go to this page:
  //   https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#supported-rules
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],

    'linebreak-style': ['error', 'unix'],

    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    'eol-last': 'error',
    'key-spacing': 'error',

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

    // Typescript compiler already checks this type of errors.
    'no-undef': 'off',
    
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_', argsIgnorePattern: '_' }],

    'prefer-const': 'off',

    '@typescript-eslint/no-explicit-any': 'off',

    'no-var': 'error',

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
  },
  plugins: [
    '@typescript-eslint',
  ],
}

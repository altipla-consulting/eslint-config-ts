module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  ignorePatterns: ['*.css'],
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'key-spacing': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-undef': 'error',
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_', argsIgnorePattern: '_' }],
  },
  plugins: [
    '@typescript-eslint',
  ],
}

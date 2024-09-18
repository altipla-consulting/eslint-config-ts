import ts from "typescript-eslint";
import globals from "globals";
import js from "@eslint/js";

export default ts.config(js.configs.recommended, ...ts.configs.recommended, {
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    "@typescript-eslint": ts.plugin,
  },
  ignores: ["dist/", "tmp/", "src/env.d.ts"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parser: ts.parser,
    ecmaVersion: 11,
    sourceType: "module",
    parserOptions: {
      project: ["./tsconfig.json"],
    },
  },
  rules: {
    indent: "off",
    "@typescript-eslint/indent": ["off"],
    "linebreak-style": ["error", "unix"],
    "eol-last": "error",
    "key-spacing": "error",
    curly: "error",
    "space-before-blocks": "error",
    "space-infix-ops": "error",
    "spaced-comment": ["error", "always"],
    "function-paren-newline": ["error", "consistent"],
    "arrow-parens": "off",
    "space-in-parens": ["error", "never"],
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: true,
      },
    ],
    "array-bracket-spacing": ["error", "never"],
    semi: ["error", "never"],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "_",
        argsIgnorePattern: "_",
      },
    ],
    "prefer-const": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "no-var": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
        },
      },
    ],
    "no-confusing-arrow": [
      "error",
      {
        allowParens: false,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        name: "lodash",
        message: "Please use lodash-es instead.",
      },
    ],
  },
});

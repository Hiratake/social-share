// https://eslint.org/docs/latest/use/configure
require('@rushstack/eslint-patch/modern-module-resolution')
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/component-tags-order': [
      'error',
      { order: ['script', 'template', 'style'] },
    ],
  },
}

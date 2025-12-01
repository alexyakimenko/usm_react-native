// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPrettier = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  eslintPrettier,
]);

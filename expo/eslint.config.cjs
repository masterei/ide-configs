// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const fs = require('fs');
const path = require('path');

let prettierConfig = {};
try {
  prettierConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));
} catch {
  // eslint-disable-next-line no-console
  console.warn('⚠️  Warning: .prettierrc not found or invalid. Using default Prettier config.');
}

let gitignores = [];
try {
  gitignores = fs
    .readFileSync(path.resolve(__dirname, '.gitignore'), 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(
      (line) =>
        line &&
        // comments
        !line.startsWith('#') &&
        // negations
        !line.startsWith('!'),
    );
} catch {
  // eslint-disable-next-line no-console
  console.warn('⚠️  Warning: .gitignore not found. No custom ignore paths applied.');
}

module.exports = defineConfig([
  expoConfig,
  {
    name: 'prettier',
    languageOptions: {
      globals: {
        __dirname: 'readonly',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    ignores: gitignores,
  },
]);

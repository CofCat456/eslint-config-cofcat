module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:import/errors'],
  plugins: ['import'],
  overrides: [],
  parserOptions: { ecmaVersion: 'latest' },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    'import/extensions': ['error', 'ignorePackages', { js: 'ignorePackages' }],
    'import/prefer-default-export': 'off',
  },
};

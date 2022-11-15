# eslint-config-cofcat

## Installation

```bash
# install the eslint-config-cofcat
npm install -D eslint-config-cofcat
```

## Usage

### Setup Configuration of Prettier

Prettier is used for formatting code with project

Just copy file in your project, then will working;

```javascript
// prettier.config.js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
};
```

### How To Use

Extends the config with the `extends` field in eslint config.

```jsonc
// .eslintrc
{
  "extends": ["cofcat"]
}
```

## Inspired By

- [eslint-config-airbnb](https://github.com/airbnb/javascript)

module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
      },
    ],
    '@next/next/no-img-element': 0, // enable if server-side rendering
  },
};

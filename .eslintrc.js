// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // General
    'no-console': 'error',

    // React
    'max-len': ['error', { code: 100 }],
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-curly-brace-presence': ['warn'],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prefer-stateless-function': ['warn'],
    'react/prop-types': ['warn'],
    'no-return-assign': ['off'],
  },
};

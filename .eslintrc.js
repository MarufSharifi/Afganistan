module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-semi': true,
    semi: ['error', 'never'],
    'prettier/prettier': 'error',
  },
};

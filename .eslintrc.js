module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'comma-dangle': [0, 'never'],
    quotes: [2, 'double', 'avoid-escape'],
    'no-console': ['error', {allow: ['warn', 'error']}],
  },
};
